<template>
  <div id="layersVideo">
    <!-- 地图 -->
    <arcgisMapIndex
      class="mapBox"
      :gisModules="gisModules"
      @initmap="finishInitMap"
      ref="arcgisMapIndex"
    ></arcgisMapIndex>

    <!-- 控制器 -->
    <div class="tooltip">
      <label for="bufferNum">{{ typeName }}:</label>
      <el-slider
        v-model="kind"
        :step="1"
        :max="9"
        @change="watchKind"
      ></el-slider>
    </div>
  </div>
</template>
<script>
import arcgisMapIndex from "../components/arcgisMapIndex";
export default {
  name: "layersVideo",
  components: {
    arcgisMapIndex,
  },
  data() {
    return {
      gisModules: [
        "esri/config",
        "esri/widgets/Zoom",
        "esri/widgets/ScaleBar",
        "esri/tasks/support/IdentifyParameters",
        "esri/tasks/IdentifyTask",
        "esri/tasks/support/Query",
        "esri/tasks/QueryTask",
        "esri/layers/WebTileLayer",
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend",
      ],
      map: null,
      view: null,
      gisConstructor: null,
      kind: 0,
      typeName: "商业",
      allLayers: [],
      serverUrl:
        process.env.VUE_APP_BASE_API +
        "/arcgis/rest/services/grade1/MapServer/",
      layerIdsMap: [
        { id: 0, layerId: 1, type: "商业", code: "Comm" },
        { id: 1, layerId: 4, type: "交通", code: "Trans" },
        { id: 2, layerId: 7, type: "购物", code: "Shopping" },
        { id: 3, layerId: 10, type: "教育", code: "Education" },
        { id: 4, layerId: 13, type: "医疗", code: "Medical" },
        { id: 5, layerId: 16, type: "金融", code: "Finance" },
        { id: 6, layerId: 19, type: "景观", code: "City" },
        { id: 7, layerId: 22, type: "便民", code: "Convenience" },
        { id: 8, layerId: 25, type: "经济", code: "Economy" },
        { id: 9, layerId: 28, type: "文体", code: "Sports" },
      ],
    };
  },
  mounted() {},
  beforeDestroy() {
    clearInterval();
  },
  methods: {
    finishInitMap(val) {
      this.map = val.map;
      this.view = val.view;
      this.gisConstructor = val.gisConstructor;
      for (let obj of this.layerIdsMap) {
        this.loadLayers(obj.id, obj.layerId);
      }
    },

    //加载所有图层，设置不可见
    loadLayers(id, layerId) {
      let layer = new this.gisConstructor.FeatureLayer({
        url: this.serverUrl + layerId,
        id: id,
        labelVisible: false,
        visible: false,
        outFields: ["*"],
        definitionExpression: this.extentString, //设置默认过滤条件
      });
      this.map.add(layer);
      this.allLayers.push(layer);

      if (id === 0) {
        layer.visible = true;
      }

      if (id === 9) {
        this.video();
      }
    },

    //设置循环播放
    video() {
      let time = setInterval(() => {
        if (this.kind === 9) {
          this.kind = 0;
        } else {
          this.kind++;
        }
        this.watchKind();
      }, 3000);
    },

    //监听控制器
    watchKind() {
      this.typeName = this.layerIdsMap[this.kind].type;
      for (let obj of this.allLayers) {
        if (this.kind === parseInt(obj.id)) {
          obj.visible = true;
        } else {
          obj.visible = false;
        }
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#layersVideo {
  width: 100%;
  height: 100%;
  position: relative;
  .tooltip {
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 200px;
    background: white;
    padding: 10px;
  }
}
</style>