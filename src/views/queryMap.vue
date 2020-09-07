  <template>
  <div id="queryMap">
    <!-- 地图 -->
    <div id="viewDiv"></div>

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
        <label for="bufferNum">设置图形缓冲区:</label>
        <el-slider v-model="bufferSize" :step="10" :max="500" show-input @change="watchBuffer()"></el-slider>
      </div>
      <br />
      <button class="esri-button" @click="clearGeometry()" type="button">清空</button>
    </div>

    <!-- 结果对话框 -->
    <div id="resultDiv" class="esri-widget" v-show="resultBox">
      <div class="count">
        被选中的对象:
        <div class="count">{{count}}</div>
      </div>
      <div class="charts">
        <ul>
          <li v-for="(value,key) in resultObj" :key="value">{{key}}:{{value}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
  <script>
import {loadModules} from 'esri-loader'
import echarts from 'echarts'
export default {
  name: 'queryMap',
  data() {
    return {
      resultObj: {},
      geometryEngine: null,
      sceneLayer: null,
      sceneLayerView: null,
      bufferSize: 0,
      count: 0,
      highlightHandle: null,
      resultBox: false,
      SketchViewModel: null,
      sketchGeometry: null,
      bufferLayer: null,
      sketchLayer: null,
      webscene: null,
      // map: null,
      view: null,
      gisConstructor: {},
      gisModules: ["esri/WebScene",
        "esri/views/SceneView",
        "esri/layers/GraphicsLayer",
        "esri/widgets/Sketch/SketchViewModel",
        "esri/widgets/Slider",
        "esri/geometry/geometryEngine",
        "esri/Graphic",
        "esri/core/promiseUtils"]
    }
  },
  mounted() {
    //初始化地图
    loadModules(this.gisModules,{
      version: '4.16',
      css: 'http://localhost:8080/4.16/esri/css/main.css',
      url: "http://localhost:8080/4.16/init.js"
    })
      .then((args) => {
        for(let k in args) {
          let name=this.gisModules[k].split('/').pop()
          this.gisConstructor[name]=args[k]
        }

      }).then(this.initMap)
  },
  methods: {
    // 初始化地图
    initMap() {
      // Load webscene and display it in a SceneView
      this.webscene=new this.gisConstructor.WebScene({
        portalItem: {
          id: "fb5948b2bb76439792786000b942e5b7"
        }
      })

      this.view=new this.gisConstructor.SceneView({
        container: "viewDiv",
        map: this.webscene,
        // center: [-117.1708,34.0574],
        // zoom: 12,
        padding: {
          right: 300
        }
      })


      //添加工具
      this.loadTools()

      // Assign scene layer once webscene is loaded and initialize UI
      this.webscene.load().then(() => {
        this.sceneLayer=this.webscene.layers.find(function(layer) {
          return layer.title==="Helsinki textured buildings"
        })
        this.sceneLayer.outFields=["buildingMaterial","yearCompleted"]

        this.view.whenLayerView(this.sceneLayer).then((layerView) => {
          this.sceneLayerView=layerView
          queryDiv.style.display="block"
        })
      })

      this.geometryEngine=this.gisConstructor.geometryEngine

    },


    //添加工具
    loadTools() {
      let sketchLayer=new this.gisConstructor.GraphicsLayer()
      let bufferLayer=new this.gisConstructor.GraphicsLayer()
      this.view.map.addMany([bufferLayer,sketchLayer])

      this.view.ui.add([queryDiv],"bottom-left")
      this.view.ui.add([resultDiv],"top-right")

      this.sketchLayer=sketchLayer
      this.bufferLayer=bufferLayer

      // use SketchViewModel to draw polygons that are used as a query
      let sketchGeometry=null
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

    },

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
      this.clearHighlighting()
      this.bufferSize=0
      this.resultBox=false
    },


    //查询
    runQuery() {
      let _this=this
      let promiseUtils=this.gisConstructor.promiseUtils
      // set the geometry query on the visible SceneLayerView
      var debouncedRunQuery=promiseUtils.debounce(function() {
        if(!_this.sketchGeometry) {
          return
        }

        _this.resultBox=true
        _this.updateBufferGraphic(_this.bufferSize)
        return promiseUtils.eachAlways([
          _this.queryStatistics(),
          _this.updateSceneLayer()
        ])
      })

      debouncedRunQuery().catch((error) => {
        if(error.name==="AbortError") {
          return
        }

        console.error(error)
      })
    },


    //清空高亮
    clearHighlighting() {
      if(this.highlightHandle) {
        this.highlightHandle.remove()
        this.highlightHandle=null
      }
    },

    //高亮处理
    highlightObjects(objectIds) {
      // Remove any previous highlighting
      this.clearHighlighting()
      const objectIdField=this.sceneLayer.objectIdField
      this.count=objectIds.length
      this.highlightHandle=this.sceneLayerView.highlight(objectIds)
    },

    //更新缓冲区
    updateBufferGraphic(buffer) {
      // add a polygon graphic for the buffer
      let _this=this
      if(buffer>0) {
        var bufferGeometry=this.geometryEngine.geodesicBuffer(
          _this.sketchGeometry,
          buffer,
          "meters"
        )
        if(this.bufferLayer.graphics.length===0) {
          this.bufferLayer.add(
            new this.gisConstructor.Graphic({
              geometry: bufferGeometry,
              symbol: _this.sketchViewModel.polygonSymbol
            })
          )
        } else {
          this.bufferLayer.graphics.getItemAt(0).geometry=bufferGeometry
        }
      } else {
        this.bufferLayer.removeAll()
      }
    },

    //更新地图上查询结果
    updateSceneLayer() {
      const query=this.sceneLayerView.createQuery()
      query.geometry=this.sketchGeometry
      query.distance=this.bufferSize
      return this.sceneLayerView.queryObjectIds(query).
        then((res) => {
          this.highlightObjects(res)
        })
    },

    //queryStatistics
    queryStatistics() {
      const statDefinitions=[
        {
          onStatisticField:
            "CASE WHEN buildingMaterial = 'concrete or lightweight concrete' THEN 1 ELSE 0 END",
          outStatisticFieldName: "material_concrete",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN buildingMaterial = 'brick' THEN 1 ELSE 0 END",
          outStatisticFieldName: "material_brick",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN buildingMaterial = 'wood' THEN 1 ELSE 0 END",
          outStatisticFieldName: "material_wood",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN buildingMaterial = 'steel' THEN 1 ELSE 0 END",
          outStatisticFieldName: "material_steel",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN buildingMaterial IN ('concrete or lightweight concrete', 'brick', 'wood', 'steel') THEN 0 ELSE 1 END",
          outStatisticFieldName: "material_other",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN (yearCompleted >= '1850' AND yearCompleted <= '1899') THEN 1 ELSE 0 END",
          outStatisticFieldName: "year_1850",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN (yearCompleted >= '1900' AND yearCompleted <= '1924') THEN 1 ELSE 0 END",
          outStatisticFieldName: "year_1900",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN (yearCompleted >= '1925' AND yearCompleted <= '1949') THEN 1 ELSE 0 END",
          outStatisticFieldName: "year_1925",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN (yearCompleted >= '1950' AND yearCompleted <= '1974') THEN 1 ELSE 0 END",
          outStatisticFieldName: "year_1950",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN (yearCompleted >= '1975' AND yearCompleted <= '1999') THEN 1 ELSE 0 END",
          outStatisticFieldName: "year_1975",
          statisticType: "sum"
        },
        {
          onStatisticField:
            "CASE WHEN (yearCompleted >= '2000' AND yearCompleted <= '2015') THEN 1 ELSE 0 END",
          outStatisticFieldName: "year_2000",
          statisticType: "sum"
        }
      ]
      const query=this.sceneLayerView.createQuery()
      query.geometry=this.sketchGeometry
      query.distance=this.bufferSize
      query.outStatistics=statDefinitions

      return this.sceneLayerView.queryFeatures(query).then((result) => {
        const allStats=result.features[0].attributes
        this.resultObj=allStats
      },console.error)
    },


  },
}
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
#queryMap {
  height: 100%;
  width: 100%;
}

#viewDiv {
  height: 100%;
  width: 100%;
}

.esri-ui-top-right {
  max-height: 100%;
}

#queryDiv,
#resultDiv {
  width: 250px;
  font-size: 14px;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
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
</style>