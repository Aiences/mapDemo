<template>
  <div id="miniMap">
    <div class="mini_box"></div>
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js"
export default {
  name: 'miniMap',
  data() {
    return {
    }
  },
  mounted() {
    //加资源
    bus.$on('initmap',(msg) => {
      this.map=msg.map
      this.view=msg.view
      this.gisConstructor=msg.gisConstructor
    })

  },
  methods: {

  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.mini_box {
  width: 300px;
  height: 300px;
  border: 1px solid #eeeeee;
  background: white;
}
</style>