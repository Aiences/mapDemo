<template>
  <div id="analyse">
    <arcgisMapIndex class="mapBox" :gisModules="gisModules" ref="arcgisMapIndex"></arcgisMapIndex>
    <chooseLayer class="choose_box"></chooseLayer>
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js";
import arcgisMapIndex from "../components/arcgisMapIndex";
import chooseLayer from '../components/chooselayer'
export default {
  name: "analyse",
  components: {
    arcgisMapIndex,chooseLayer
  },
  data() {
    return {
      gisModules: [
        "esri/Map",
        "esri/layers/WebTileLayer",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/layers/MapImageLayer",
        "esri/layers/GeoJSONLayer",
        'esri/geometry/Point',
        "esri/core/watchUtils",
      ],
      map: null,
      view: null,
      gisConstructor: null,
      renderer: null,
      featureLayer: null,
      highlight: null,
      findMap: {
        '教育': 'http://10.45.204.118:6080/arcgis/rest/services/com_education/MapServer/',
        '商务': 'http://10.45.204.118:6080/arcgis/rest/services/asw/MapServer/',
        '交通': 'http://10.45.204.118:6080/arcgis/rest/services/ajt/MapServer/',
        '消费': 'http://10.45.204.118:6080/arcgis/rest/services/com_shopping/MapServer/',
      },

    };
  },
  mounted() {
    //加资源
    bus.$on("initmap",(msg) => {
      this.map=msg.map;
      this.view=msg.view;
      this.gisConstructor=msg.gisConstructor;
      this.loadLayer();
    });

    //图层勾选
    bus.$on("layerSelect",(msg) => {
      let list=msg.split(',')
      const route=list[0]
      const code=list[1]
      const name=list[2]
      this.getFeatureLayer(route,code,name)
    });
  },
  methods: {
    //加载图层
    loadLayer() {
      // var layer=new this.gisConstructor.MapImageLayer({
      //   url: this.mapServer,
      // });

      // this.map.add(layer);
      // this.view.goTo({
      //   center: [119.431989,32.39142],
      // });

      // this.watchMouseClick();
    },

    getFeatureLayer(route,code,name) {
      let self=this

      if(this.featureLayer) {
        this.map.remove(this.featureLayer)
        this.view.popup.visible=false;
      }

      this.featureLayer=new this.gisConstructor.FeatureLayer({
        url: self.findMap[name]+route,
        blendMode: "multiply"
      })

      this.map.add(this.featureLayer);

      // this.showAllGraphics()

      this.watchMouseMove()

      this.watchMouseClick()

    },

    watchMouseMove() {
      // highlight feature on pointer-move
      let _this=this
      this.view.on("pointer-move",(event) => {
        this.view.hitTest(event).then(function(response) {
          if(response.results.length) {
            var graphic=response.results.filter(function(result) {
              return result.graphic.layer===_this.featureLayer;
            })[0].graphic;

            _this.openPopup(graphic)

            if(_this.highlight) {
              _this.highlight.remove()
              _this.highlight=null
            }

            _this.view.whenLayerView(graphic.layer).then(function(layerView) {
              _this.highlight=layerView.highlight(graphic);
            });
          }
        });
      });
    },


    //打开popup
    openPopup(graphic) {
      let geometry=graphic.geometry
      this.view.popup.autoOpenEnabled=false;

      if(geometry.type==="polygon") {
        this.doOpen(geometry.centroid,graphic.attributes)
      } else {
        let location={
          latitude: geometry.latitude,
          longitude: geometry.longitude
        }
        this.doOpen(location,graphic.attributes)
      }
    },

    //执行打开popup
    doOpen(location,attributes) {
      this.view.popup.open({
        // Set the popup's title to the coordinates of the location
        title: "属性",
        location: location,
        content: "id:"+attributes.OBJECTID, // content displayed in the popup
      });
    },


    //地图自动缩放到展示所有对象
    showAllGraphics() {
      let _this=this
      this.view.whenLayerView(this.featureLayer).then(function(layerView) {
        layerView.watch("updating",function(val) {
          if(!val) {  // wait for the layer view to finish updating
            layerView.queryExtent().then(function(results) {
              _this.view.goTo(results.extent);  // go to the extent of all the graphics in the layer view
            });
          }
        });
      });
    },




    //监听点击
    watchMouseClick() {
      this.view.on("click",(event) => {
        console.log(event,"===========");

      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#analyse {
  width: 100%;
  height: 100%;

  .choose_box {
    position: absolute;
    width: 200px;
    height: 200px;
    padding: 10px;
    overflow: auto;
    z-index: 200;
    background: #fff;
    right: 10px;
    top: 60px;
  }
}
</style>