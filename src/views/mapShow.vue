<template>
  <div style="width:100%;height:100%">
    <!-- <div id="testMap"></div> -->
    <div id="testMap"></div>
  </div>
</template>

<script>
import {loadModules} from 'esri-loader'

export default {
  name: 'mapShow',
  data() {
    return {
      SketchViewModel: null,
      map: null,
      view: null,
      graphicsLayer: null,
      popupTemplate: null,
      gisConstructor: {},
      gisModules: ['esri/Map',
        'esri/views/MapView',
        'esri/widgets/Sketch',
        'esri/widgets/Sketch/SketchViewModel',
        'esri/toolbars/draw',
        'esri/layers/GraphicsLayer',
        'esri/widgets/BasemapToggle']
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
          let name=this.gisModules[k].split('/').pop();
          // @ts-ignore
          this.gisConstructor[name]=args[k];
        }

      }).then(this.initMap);

  },
  methods: {

    // 初始化地图
    initMap() {
      this.map=new this.gisConstructor.Map(
        {
          basemap: "gray-vector"
        }
      );

      this.view=new this.gisConstructor.MapView({
        container: "testMap",
        map: this.map,
        center: [-117.1708,34.0574],
        zoom: 12,
        padding: {
          right: 300
        }
      });


      //添加Sketch 
      this.handleSketch()

    },


    handleSketch() {
      //新建一个图形图层用于存放画图过程中的图形
      this.graphicsLayer=new this.gisConstructor.GraphicsLayer({
        //空间参考，一般要跟地图的一样
        spatialReference: this.view.spatialReference,
      });

      this.map.add(this.graphicsLayer);

      const sketch=new this.gisConstructor.Sketch({
        layer: this.graphicsLayer,
        view: this.view,
        // graphic will be selected as soon as it is created
        // creationMode: "update"
      });

      this.view.ui.add(sketch,"top-right");

      // Listen to sketch widget's create event.
      sketch.on("create",function(event) {
        // check if the create event's state has changed to complete indicating
        // the graphic create operation is completed.
        if(event.state==="complete") {
          // remove the graphic from the layer. Sketch adds
          // the completed graphic to the layer by default.
          // polygonGraphicsLayer.remove(event.graphic);

          console.log(event.graphic.geometry,'=========create')

          // use the graphic.geometry to query features that intersect it
          // selectFeatures(event.graphic.geometry);
        }
      })

      // Listen to sketch widget's update event.
      sketch.on("update",function(event) {
        // if(event.state==="active") {
        //   sketch.delete();
        // } 

        if(event.state==="complete") {

          console.log(event.graphics[0].geometry,'===========update==')

        }


      });

      // Listen to sketch widget's delete event.
      sketch.on("delete",function(event) {
        event.graphics.forEach(function(graphic) {
          console.log("deleted",graphic)
        });
      });



    },


















  },

  beforeDestroy() {
    // destroy the map view
    if(this.view) {
      this.view.container=null;
    }
  }
}

</script>

<style scoped>
#testMap {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.panel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.panel-side {
  padding: 2px;
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  z-index: 60;
}

.panel-side h3 {
  padding: 0 20px;
  margin: 20px 0;
}

.panel-side ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.panel-side li {
  list-style: none;
  padding: 10px 20px;
}

.panel-result {
  cursor: pointer;
  margin: 2px 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.panel-result:hover,
.panel-result:focus {
  color: orange;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>