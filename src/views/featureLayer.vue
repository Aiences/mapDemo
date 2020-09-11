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
        'esri/layers/WebTileLayer',
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend"],
      map: null,
      view: null,
      gisConstructor: null,
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
        blendMode: "multiply",
        opacity: 0.5
      })

      this.map.add(this.featureLayer)
    }

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