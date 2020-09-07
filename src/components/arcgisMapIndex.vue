<template>
  <div id="arcgisMapIndex"></div>
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
      this.map=new this.gisConstructor.Map({
        basemap: "gray-vector",
      });

      this.view=new this.gisConstructor.MapView({
        container: "arcgisMapIndex",
        map: this.map,
        center: [-122.3487846,47.58907],
        zoom: 11,
        padding: {
          right: 300
        }
      })

      let obj={
        map: this.map,
        view: this.view,
        gisConstructor: this.gisConstructor
      }

      bus.$emit('initmap',obj)

    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#arcgisMapIndex {
  height: 100%;
  width: 100%;
}
</style>