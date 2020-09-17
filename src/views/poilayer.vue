<template>
  <div id="poi">
    <arcgisMapIndex class="mapBox" :gisModules="gisModules" ref="arcgisMapIndex"></arcgisMapIndex>

    <choosePoi class="choosePoi_box" ref="choosePoi"></choosePoi>

    <!-- 查询条件对话框 -->
    <div id="queryDiv" class="esri-widget">
      <b>查询兴趣点</b>
      <br />
      <br />画图查询:
      <div class="geometry-options">
        <button
          @click="geometryButtonsClickHandler('point')"
          class="esri-widget--button esri-icon-map-pin geometry-button"
          title="Query by point"
        ></button>
        <button
          @click="geometryButtonsClickHandler('polyline')"
          class="esri-widget--button esri-icon-polyline geometry-button"
          title="Query by line"
        ></button>
        <button
          @click="geometryButtonsClickHandler('polygon')"
          class="esri-widget--button esri-icon-polygon geometry-button"
          title="Query by polygon"
        ></button>
      </div>
      <br />
      <div class="tooltip">
        <label for="bufferNum">设置缓冲区:</label>
        <el-slider v-model="bufferSize" :step="10" :max="500" show-input @change="watchBuffer()"></el-slider>
      </div>
      <br />
      <button class="esri-button" @click="clearGeometry()" type="button">清空</button>
    </div>

    <!--鹰眼控件 -->
    <miniMap class="mini_map"></miniMap>
  </div>
</template>
<script>
import miniMap from "../components/miniMap"
import choosePoi from "../components/choosePoi"
import bus from "@/utils/eventBus.js"
import arcgisMapIndex from "../components/arcgisMapIndex"
export default {
  name: 'poilayer',
  components: {
    arcgisMapIndex,choosePoi,miniMap
  },
  data() {
    return {
      gisModules: [
        "esri/layers/GraphicsLayer",
        "esri/widgets/Sketch/SketchViewModel",
        "esri/widgets/Slider",
        "esri/geometry/geometryEngine",
        "esri/Graphic",
        "esri/core/promiseUtils",
        "esri/core/Collection",
        "esri/config",
        'esri/tasks/support/IdentifyParameters',
        "esri/tasks/IdentifyTask",
        "esri/tasks/support/Query",
        'esri/tasks/QueryTask',
        'esri/layers/WebTileLayer',
        "esri/Map",
        "esri/views/MapView",
            "esri/layers/FeatureLayer",
            "esri/widgets/Zoom",
            "esri/widgets/ScaleBar",
        "esri/widgets/Legend"],
      map: null,
      view: null,
      layerViewArr: null,
      gisConstructor: null,
      bufferSize: 0,
      geometryEngine: null,

    }
  },
  mounted() {
    //加资源
    bus.$on('initmap',(msg) => {
      this.map=msg.map
      this.view=msg.view
      this.gisConstructor=msg.gisConstructor
      this.layerViewArr=new this.gisConstructor.Collection();
      this.getCount()
      this.loadTools()
    })

    //加载poi图层
    bus.$on('poiLayerSelect',(urls) => {
      //console.log(urls,'=======urls')
      this.showPoi(urls)
      this.runQuery()
    })

  },
  methods: {
    //监听画图
    watchSketch() {
      this.sketchViewModel.on("create",(event) => {
        if(event.state==="complete") {
          this.sketchGeometry=event.graphic.geometry
          this.runQuery()
        }
      })

      this.sketchViewModel.on("update",(event) => {
        if(event.state==="complete") {
          this.sketchGeometry=event.graphics[0].geometry
          this.runQuery()
        }
      })

    },

    //监听缓冲区
    watchBuffer() {
      this.runQuery()
    },

    runQuery() {
      this.updateBufferGraphic(this.bufferSize);
      var g=null;
      if(this.bufferGeometry) {
        g=this.bufferGeometry;
      }
      else if(this.sketchGeometry&&this.sketchGeometry.type=="polygon") {
        g=this.sketchGeometry;
      }
      this.layerViewArr.forEach(view => {
        if(g) {
          view.filter={
            geometry: g,
            spatialRelationship: "contains"
          };
        }
        else {
          view.filter=null;
        }
      });
    },

    //更新缓冲区
    updateBufferGraphic(buffer) {
      // add a polygon graphic for the buffer
      let _this=this
      if(buffer>0) {
        _this.bufferGeometry=this.geometryEngine.geodesicBuffer(
          _this.sketchGeometry,
          buffer,
          "meters"
        )
        if(this.bufferLayer.graphics.length===0) {
          this.bufferLayer.add(
            new this.gisConstructor.Graphic({
              geometry: _this.bufferGeometry,
              symbol: _this.sketchViewModel.polygonSymbol
            })
          )
        } else {
          this.bufferLayer.graphics.getItemAt(0).geometry=_this.bufferGeometry
        }
      } else {
        this.bufferLayer.removeAll()
        _this.bufferGeometry=null;
      }
    },

    //点击按钮触发画图
    geometryButtonsClickHandler(geometryType) {
      this.clearGeometry()
      this.sketchViewModel.create(geometryType)
      this.watchSketch()
    },

    //清空
    clearGeometry() {
      this.sketchGeometry=null
      this.sketchViewModel.cancel()
      this.sketchLayer.removeAll()
      this.bufferLayer.removeAll()
      this.bufferSize=0
      this.runQuery()
    },

    //添加工具
    loadTools() {
      let sketchLayer=new this.gisConstructor.GraphicsLayer()
      let bufferLayer=new this.gisConstructor.GraphicsLayer()
      this.view.map.addMany([bufferLayer,sketchLayer])


      this.sketchLayer=sketchLayer
      this.bufferLayer=bufferLayer

      const sketchViewModel=new this.gisConstructor.SketchViewModel({
        layer: this.sketchLayer,
        defaultUpdateOptions: {
          tool: "reshape",
          toggleToolOnClick: false
        },
        view: this.view,
        defaultCreateOptions: {hasZ: false}
      })

      this.sketchViewModel=sketchViewModel


      this.geometryEngine=this.gisConstructor.geometryEngine

    },

    //展示poi图层
    showPoi(urls) {
      var $this=this;
      var $map=this.map;
      var arr=[];
      this.map.layers.toArray().forEach(item => {
        if(item.typeFlag==1) {
          var url=item.url+'/'+item.layerId;
          if(urls.indexOf(url)<0) {
            $map.remove(item);
          }
          else {
            arr.push(url);
          }
        }
      });
      urls.forEach(url => {
        if(arr.indexOf(url)<0) {
          var layer=new this.gisConstructor.FeatureLayer({
            url: url,
            labelVisible: false,
            visible: true,
            typeFlag: 1,
            // renderer: {
            //   type: "simple",
            //   symbol: {
            //     type: "picture-marker",
            //     url: "/loa.png",
            //     width: "32px",
            //     height: "32px"
            //   }
            // },
            outFields: ['*']
          });
          $map.add(layer);
          layer.on("layerview-create",function(event) {
            $this.layerViewArr.add(event.layerView);
            $this.runQuery();
          });
          layer.on("layerview-destroy",function(event) {
            $this.layerViewArr.remove(event.layerView);
          });
        }
      })

    },

    //获取每个图层的数量
    getCount() {
      let list=this.$refs.choosePoi.list
      //console.log(list,'=====list')
      var $this=this;
      function queryCount(item) {
        var queryTask=new $this.gisConstructor.QueryTask({
          url: item.url
        });
        queryTask.executeForCount({where: ""}).then(function(count) {
          item.count=count;
        });
      }

      list.forEach(element => {
        if(element.layerList) {
          element.layerList.forEach(item => {
            queryCount(item)
          })
        }
      });
    },
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#poi {
  width: 100%;
  height: 100%;
  position: relative;

  .mini_map {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .choosePoi_box {
    position: absolute;
    top: 65px;
    left: 10px;
  }

  #queryDiv {
    width: 250px;
    font-size: 14px;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    top: 65px;
    right: 10px;
  }

  .geometry-options {
    display: flex;
    flex-direction: row;
  }
  .geometry-button {
    flex: 1;
    border-style: solid;
    border-width: 1px;
    border-image: none;
  }
  .geometry-button-selected {
    background: #4c4c4c;
    color: #fff;
  }

  #bufferNum {
    width: 90%;
    margin: 2.5em auto 0;
  }

  .count {
    white-space: nowrap;
    font-size: 14px;
    font-weight: bold;
    display: inline-block;
  }
}
</style>