<template>
  <div id="arcgisMapIndex">
    <!-- 鹰眼 -->
    <!-- <div id="overView">
      <div id="extentDiv" ref="extentDiv" :style="styleObject"></div>
    </div>-->
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js"
import {loadModules} from 'esri-loader'

export default {
  name: 'arcgisMapIndex',
  props: {
    gisModules: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      map: null,
      view: null,
      overView: null,
      styleObject: {},
      gisConstructor: {},
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
      const tiandituBaseUrl="http://{subDomain}.tianditu.gov.cn"; //天地图服务地址
      const token="ff8f0c7ab946f2a41a42a5bede812b02"; //天地图token
      this.gisConstructor.config.fontsUrl="http://localhost:8080/fonts"
      this.map=new this.gisConstructor.Map();

      this.view=new this.gisConstructor.MapView({
        container: "arcgisMapIndex",
        map: this.map,
        scale: 10000,
        center: [119.4378,32.4289],
        padding: {
          right: 300
        }
      })

      //矢量地图(球面墨卡托投影)
      const tiledLayer=new this.gisConstructor.WebTileLayer({
        urlTemplate:
          tiandituBaseUrl+
          "/vec_w/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=vec&STYLE=default&FORMAT=tiles&TILEMATRIXSET=w&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk="+
          token,
        subDomains: [
          "t0",
          "t1",
          "t2",
          "t3",
          "t4",
          "t5",
          "t6",
          "t7",
        ],
      })

      //矢量注记(球面墨卡托投影)
      const tiledLayerAnno=new this.gisConstructor.WebTileLayer({
        urlTemplate:
          tiandituBaseUrl+
          "/cva_w/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=cva&STYLE=default&FORMAT=tiles&TILEMATRIXSET=w&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk="+
          token,
        subDomains: [
          "t0",
          "t1",
          "t2",
          "t3",
          "t4",
          "t5",
          "t6",
          "t7",
        ],
      })

      this.map.add(tiledLayer);
      // this.map.add(tiledLayerAnno);


      let obj={
        map: this.map,
        view: this.view,
        gisConstructor: this.gisConstructor
      }

      bus.$emit('initmap',obj)

      // this.initOverViewMap()

    },

    // 初始化鹰眼图
    initOverViewMap() {
      const overViewMap=new this.gisConstructor.Map();
      const regionBoundary=new this.gisConstructor.GeoJSONLayer({
        url: "/json/regionBoundary.json",
        definitionExpression: "area_level ='市辖区'or area_level='县级市'or area_level='县'"
      });
      overViewMap.add(regionBoundary)
      this.overView=new this.gisConstructor.MapView({
        container: "overView",
        map: overViewMap,
        constraints: {
          rotationEnabled: false
        },
        scale: 10000,
        center: [119.4378,32.4289],
      })
      this.overView.ui.components=[];
      this.bindOverView()
    },

    // 主视图绑定鹰眼图
    bindOverView() {
      const self=this
      this.overView.when(() => {
        // 更改鹰眼选框范围
        this.view.watch("extent",this.updateOverviewExtent);
        this.overView.watch("extent",this.updateOverviewExtent)
        // 静止时更新鹰眼底图范围
        this.gisConstructor.watchUtils.when(this.view,"stationary",this.updateOverview);
      });
    },

    updateOverview() {
      this.overView.goTo({
        center: this.view.center,
        scale: this.view.scale*2*
          Math.max(
            this.view.width/this.overView.width,
            this.view.height/this.overView.height
          )
      });
    },

    updateOverviewExtent() {
      if(!this.view.extent)
        return
      const extent=this.view.extent;
      const bottomLeft=this.overView.toScreen(
        new this.gisConstructor.Point({
          x: extent.xmin,
          y: extent.ymin,
          spatialReference: extent.spatialReference
        })
      );
      const topRight=this.overView.toScreen(
        new this.gisConstructor.Point({
          x: extent.xmax,
          y: extent.ymax,
          spatialReference: extent.spatialReference
        })
      );

      this.styleObject={
        top: topRight.y+"px",
        left: bottomLeft.x+"px",
        height: bottomLeft.y-topRight.y+"px",
        width: topRight.x-bottomLeft.x+"px"
      }
    }



  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#arcgisMapIndex {
  height: 100%;
  width: 100%;

  #overView {
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    position: absolute;
    bottom: 17px;
    right: 12px;
    z-index: 2;
    overflow: hidden;
  }
  #extentDiv {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 3;
  }
}
</style>