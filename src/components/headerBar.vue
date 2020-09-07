<template>
  <div class="headerBar">
    <el-row type="flex" class="row-bg">
      <el-col :span="12" style="text-align:left!important;line-height:50px;height:50px;">
        <img :src="logo" alt="logo" class="logo" />
        <span class="sys_title">地图demo</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.png";

export default {
  name: "headerBar",
  data() {
    return {
      logo: logo,
    };
  },
  mounted: function() {


  },
  methods: {

  },
};
</script>
<style lang="scss" src="../styles/layout.scss"></style>
