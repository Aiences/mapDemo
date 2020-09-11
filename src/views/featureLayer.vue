<template>
  <div id="feature">
    <arcgisMapIndex class="mapBox" :gisModules="gisModules" ref="arcgisMapIndex"></arcgisMapIndex>

    <chooseFeature class="chooseFeature_box"></chooseFeature>
  </div>
</template>
<script>
import chooseFeature from "../components/chooseFeature"
import bus from "@/utils/eventBus.js"
import arcgisMapIndex from "../components/arcgisMapIndex"
export default {
  name: 'feature',
  components: {
    arcgisMapIndex,chooseFeature
  },
  data() {
    return {
      gisModules: [
        'esri/tasks/support/IdentifyParameters',
        "esri/tasks/IdentifyTask",
        "esri/tasks/support/Query",
        'esri/tasks/QueryTask',
        'esri/layers/WebTileLayer',
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend"],
      map: null,
      view: null,
      gisConstructor: null,
      searchUrl: null,
      highlight: null,
    }
  },
  mounted() {
    //加资源
    bus.$on('initmap',(msg) => {
      this.map=msg.map
      this.view=msg.view
      this.gisConstructor=msg.gisConstructor
    })

    //特征专题勾选图层
    bus.$on('featureLayerSelect',(msg) => {
      console.log(msg,'========msg')
      this.searchUrl=msg
      this.clearMap()
      this.getFeatureLayer(msg)
    })

  },
  methods: {

    clearMap() {

      if(this.featureLayer) {
        this.map.remove(this.featureLayer)
        this.featureLayer=null
      }

    },


    //展示特征专题图
    getFeatureLayer(url) {
      this.featureLayer=new this.gisConstructor.FeatureLayer({
        url: url,
        labelingInfo: [{
          labelExpression: "[街区编号]",
          labelPlacement: "always-horizontal",
          symbol: {
            type: "text",
            color: '#fff',
            font: {
              weight: "bolder",
              size: 10
            }
          }
        }],
        blendMode: "multiply",
        opacity: 0.6
      })

      this.map.add(this.featureLayer)
      this.watchMapClick()

    },

    watchMapClick() {
      let _this=this
      this.view.on("click",(event) => {
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
      })
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
        content: "id:"+attributes.OBJECTID_1, // content displayed in the popup
      });
    },



    executeIdentifyTask(event) {

      let identifyTask=new this.gisConstructor.IdentifyTask(this.searchUrl);

      let params=new this.gisConstructor.IdentifyParameters();
      // params.tolerance=3;
      params.layerIds=[0,1,2];
      params.layerOption="top";
      params.width=this.view.width;
      params.height=this.view.height;


      params.geometry=event.mapPoint;
      params.mapExtent=this.view.extent;
      // document.getElementById("viewDiv").style.cursor="wait";

      // originates from
      identifyTask
        .execute(params)
        .then(function(response) {
          let results=response.results;
          console.log(response,'========reo')
        })
    },



  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#feature {
  width: 100%;
  height: 100%;
  .chooseFeature_box {
    position: absolute;
    top: 65px;
    left: 10px;
  }
}
</style>