<template>
  <div id="mapIndex"></div>
</template>
<script>
import mapboxgl from 'mapbox-gl'
export default {
  name: 'mapIndex',
  data() {
    return {
      map: null,

    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    //初始化地图
    initMap() {
      mapboxgl.accessToken='pk.eyJ1IjoieWdqbGIiLCJhIjoiY2plejhqa2RxMDh6ZTJ3cWh5YmdocHpmcyJ9.RDW1s7rpj4sj7xCoqu6RYQ'

      const vecUrl="http://t0.tianditu.com/vec_w/wmts?tk=ff8f0c7ab946f2a41a42a5bede812b02"

      this.map=new mapboxgl.Map({
        container: 'mapIndex',  //地图容器
        style: {
          'version': 8,
          'sprite': 'mapbox://sprites/mapbox/empty-v8',
          'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
          'sources': {
            'raster-tiles': {
              'type': 'raster',
              'tiles': [vecUrl+"&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles"],
              'tileSize': 256,
            }
          },
          //高德底图
          'layers': [{
            'id': 'GaoDe_WMTS',
            'type': 'raster',
            'source': 'raster-tiles',
          }]
        },
        center: [116.409416,39.906355],
        zoom: 10
      });

      let _this=this
      this.map.on('load',function() {
        _this.loadIcon()
      })
    },

    //加载poi 图标
    loadIcon() {
      let _this=this
      this.map.loadImage(require('../assets/images/loa.png'),(error,image) => {
        if(error) throw error;
        _this.map.addImage('poi_icon',image);
      })
    }

  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#mapIndex {
  height: 100%;
  width: 100%;
}
</style>