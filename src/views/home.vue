<template>
  <div id="home">
    <MapIndex ref="mapIndex"></MapIndex>
    <ChangeLayer class="layer_box" ref="changeLayer"></ChangeLayer>
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js"
import MapIndex from "../components/mapIndex"
import ChangeLayer from "../components/changeLayer"
export default {
  name: 'home',
  components: {
    MapIndex,ChangeLayer
  },
  data() {
    return {
      map: null,
    }
  },
  mounted() {
    this.map=this.$refs.mapIndex.map
    let _this=this
    this.map.on('load',function() {
      _this.loadSource()
    })

    bus.$on('regionSelect',msg => {
      if(msg) {
        _this.loadInfos(msg)
      } else {

      }
    })
  },
  methods: {
    //加载资源与图层
    loadSource() {
      this.map.addSource('poi_geojson',{
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      })

      this.map.addLayer({
        id: 'poi-layer',
        type: 'symbol',
        source: 'poi_geojson',
        layout: {
          'visibility': 'none',
          "icon-image": "poi_icon",
          "icon-size": 0.8,
          'text-field': [
            'format',
            ['get','name'],
            {'font-scale': 1},
          ],
          'icon-anchor': 'center',
          'icon-offset': [15,0],
          "text-offset": [1.5,0],
          "text-anchor": "left",
          "icon-allow-overlap": true,
          'icon-optional': true,
          "text-ignore-placement": false
        },
        paint: {
          "text-color": "#FFFFFF",
          "text-halo-color": "#FFC0CB",
          "text-halo-width": 40,
        },
        filter: ["==","$type","Point"]
      })


      this.loadInfos()
    },

    //设置资源里的数据
    loadInfos(obj) {
      let dataSet={
        type: "FeatureCollection",
        features: []
      }

      for(let key in obj) {
        obj[key].forEach(item => {
          dataSet.features.push({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [item.lnglat[0],item.lnglat[1]]
            },
            properties: item.attributes
          })
        })
      }

      this.map.getSource('poi_geojson').setData(dataSet)
      this.map.setLayoutProperty('poi-layer','visibility','visible');
    },



  },
  beforeDestroy() {
    bus.$off('regionSelect')
  }


}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  .layer_box {
    position: absolute;
    top: 80px;
    right: 15px;
    width: 200px;
    height: 200px;
    background: #fff;
    padding: 15px;
  }
}
</style>