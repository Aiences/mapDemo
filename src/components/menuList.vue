<template>
  <div>
    <div class="user_block">
      <img :src="person" alt="person" class="icon_person" />
      <span>王文洁</span>
    </div>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#3B3B3B"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-openeds="defaultOpeneds"
    >
      <div v-for="(item,index) in menuList" :key="index">
        <div v-if="item.children.length!=0">
          <el-submenu :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="(children,i) in item.children" :key="i">
              <el-menu-item :index="children.path">
                <router-link :to="children.path">{{children.name}}</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
        <div v-else>
          <el-menu-item :index="item.path">
            <router-link :to="item.path">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </router-link>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
import person from "@/assets/images/icon_person.png";
export default {
  name: "meunList",
  data() {
    return {
      userAccount: "", //用户登录账号
      person: person,
      menuList: [],
      activeMenu: this.$route.path,
      defaultOpeneds: [],
    };
  },
  mounted: function () {
    this.menuList = [
      {
        name: "POI",
        path: "/analyse",
        children: [],
        icon: "iconfont icon-home",
      },
      {
        name: "图层勾选",
        path: "/home",
        children: [],
        icon: "iconfont icon-home",
      },
      {
        name: "点线面绘制",
        path: "/arcgismap",
        icon: "iconfont icon-china",
        children: [],
      },
      {
        name: "任意查询",
        path: "/querymap",
        icon: "iconfont icon-china",
        children: [],
      },
      {
        name: "面特征查询",
        path: "/queryPolygon",
        icon: "iconfont icon-china",
        children: [],
      },
    ];

    this.defaultOpenedsLoad();
  },
  methods: {
    // 菜单点击事件
    handleSelect(key) {
      this.activeMenu = key;
    },

    // 默认展开菜单
    defaultOpenedsLoad() {
      this.defaultOpeneds = [];
      for (let item of this.menuList) {
        if (item.children.length > 0) {
          this.defaultOpeneds.push(item.path);
        }
      }
    },
  },
  watch: {
    $route(to) {
      this.activeMenu = to.path;
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    },
  },
};
</script>
<style lang="scss" src="../styles/layout.scss"></style>

