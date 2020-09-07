<template>
  <div id="analyse">
    <arcgisMapIndex class="mapBox" :gisModules="gisModules" ref="arcgisMapIndex"></arcgisMapIndex>
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js";
import arcgisMapIndex from "../components/arcgisMapIndex";
export default {
  name: "analyse",
  components: {
    arcgisMapIndex,
  },
  data() {
    return {
      gisModules: [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/layers/MapImageLayer",
        "esri/widgets/Legend",
      ],
      map: null,
      view: null,
      gisConstructor: null,
      renderer: null,
    };
  },
  mounted() {
    //加资源
    bus.$on("initmap", (msg) => {
      this.map = msg.map;
      this.view = msg.view;
      this.gisConstructor = msg.gisConstructor;
      this.loadLayer();
    });
  },
  methods: {
    //加载图层
    loadLayer() {
      var layer = new this.gisConstructor.MapImageLayer({
        url: "http://47.103.80.107/ArcGIS/rest/services/fcpg/MapServer",
      });

      this.map.add(layer);
      this.view.goTo({
        center: [119.431989, 32.39142],
      });

      this.watchMouseClick();
    },

    //监听点击
    watchMouseClick() {
      this.view.on("click", (event) => {
        console.log(event, "===========");
        this.view.popup.autoOpenEnabled = false;

        // Get the coordinates of the click on the view
        var lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
        var lon = Math.round(event.mapPoint.longitude * 1000) / 1000;

        this.view.popup.open({
          // Set the popup's title to the coordinates of the location
          title: "Reverse geocode: [" + lon + ", " + lat + "]",
          location: event.mapPoint, // Set the location of the popup to the clicked location
          content: "This is a point of interest", // content displayed in the popup
        });
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
}
</style>