<template>
  <div id="queryPolygon">
    <arcgisMapIndex class="mapBox" :gisModules="gisModules" ref="arcgisMapIndex"></arcgisMapIndex>
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js"
import arcgisMapIndex from "../components/arcgisMapIndex"
export default {
  name: 'queryPolygon',
  components: {
    arcgisMapIndex
  },
  data() {
    return {
      gisModules: [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend"],
      map: null,
      view: null,
      gisConstructor: null,
      renderer: null,
    }
  },
  mounted() {
    //加资源
    bus.$on('initmap',(msg) => {
      this.map=msg.map
      this.view=msg.view
      this.gisConstructor=msg.gisConstructor
      this.loadSource()
      this.loadLayer()
    })


  },
  methods: {
    loadSource() {
      const less35={
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#fffcd4",
        style: "solid",
        outline: {
          width: 0.2,
          color: [255,255,255,0.5]
        }
      };

      const less50={
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#b1cdc2",
        style: "solid",
        outline: {
          width: 0.2,
          color: [255,255,255,0.5]
        }
      };

      const more50={
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#38627a",
        style: "solid",
        outline: {
          width: 0.2,
          color: [255,255,255,0.5]
        }
      };

      const more75={
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#0d2644",
        style: "solid",
        outline: {
          width: 0.2,
          color: [255,255,255,0.5]
        }
      };

      this.loadRender(less35,less50,more50,more75)


    },

    loadRender(less35,less50,more50,more75) {
      this.renderer={
        type: "class-breaks", // autocasts as new ClassBreaksRenderer()
        field: "COL_DEG",
        normalizationField: "EDUCBASECY",
        legendOptions: {
          title: "25岁以上成年人占比"
        },
        defaultSymbol: {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "black",
          style: "backward-diagonal",
          outline: {
            width: 0.5,
            color: [50,50,50,0.6]
          }
        },
        defaultLabel: "no data",
        classBreakInfos: [
          {
            minValue: 0,
            maxValue: 0.3499,
            symbol: less35,
            label: "< 35%"
          },
          {
            minValue: 0.35,
            maxValue: 0.4999,
            symbol: less50,
            label: "35 - 50%"
          },
          {
            minValue: 0.5,
            maxValue: 0.7499,
            symbol: more50,
            label: "50 - 75%"
          },
          {
            minValue: 0.75,
            maxValue: 1.0,
            symbol: more75,
            label: "> 75%"
          }
        ]
      };

    },

    loadLayer() {
      const seattleLayer=new this.gisConstructor.FeatureLayer({
        url:
          "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Puget_Sound_BG_demographics/FeatureServer/0",
        title: "面区",
        renderer: this.renderer,
        popupTemplate: {
          // autocast as esri/PopupTemplate
          title: "面区名:{FID_Block_Group}",
          content:
            "{COL_DEG} 个25岁以上的成年人拥有本科学历. "+
            "{NO_COL_DEG} 个成年人没有本科学历."
        },
        // show only block groups in Seattle
        definitionExpression: "City = 'Seattle' AND EDUCBASECY > 0",
        opacity: 0.6
      });

      const legend=new this.gisConstructor.Legend({
        view: this.view
      });

      this.view.ui.add(legend,"bottom-left");

      this.map.add(seattleLayer);

      this.watchMouseOver(seattleLayer)
    },


    //监听mouseOver
    watchMouseOver(seattleLayer) {
      this.view.on("pointer-move",(event) => {
        this.view.hitTest(event).then(
          (result) => {
            console.log(result,'=======result')
            if(!result) {
              this.view.surface.style.cursor="auto";
            } else {
              this.view.surface.style.cursor="pointer";
            }
          },
        );
      });

    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#queryPolygon {
  width: 100%;
  height: 100%;
}
</style>