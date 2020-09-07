<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-aside :class="menuStatus ? 'mene_list_open' : 'mene_list_close'">
        <div @mouseleave="leave">
          <menuList></menuList>
        </div>
      </el-aside>
      <el-container style="height:100%">
        <el-header>
          <span class="menu_control" @click="menuCloseOpen">
            <i class="el-icon-s-fold" v-if="!menuStatus"></i>
            <i class="el-icon-s-unfold" v-else></i>
          </span>
          <headerBar></headerBar>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menuList from "@/components/menuList"
import headerBar from "@/components/headerBar"
export default {
  name: 'layout',
  data() {
    return {
      menuStatus: false //this.$route.path == "/home/map" ? false : true
    }
  },
  mounted: function() {

  },
  methods: {
    menuCloseOpen() {
      this.menuStatus=!this.menuStatus;
    },

    // 鼠标移出
    leave() {
      this.menuCloseOpen();
    }


  },
  components: {
    menuList,
    headerBar
  }
}
</script>
<style scoped>
.el-header {
  background-color: rgba(255, 255, 255, 1);
  color: #000;
  height: 50px !important;
  /* text-align: center; */
  line-height: 50px;
  width: 100%;
  padding: 0px !important;
  position: relative;
  z-index: 999;
}

.el-aside {
  background: #3b3b3b;
  z-index: 999;
}

.el-main {
  background-color: #eee;
  padding: 0px !important;
  overflow: auto;
}
</style>
