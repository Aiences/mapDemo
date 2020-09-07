<template>
  <div id="changeLayer">
    <el-row>交通:</el-row>
    <el-checkbox-group v-model="checkTrdList" @change="changePoiList">
      <el-checkbox label="0">公交站</el-checkbox>
      <el-checkbox label="1">地铁</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js"
export default {
  name: 'changeLayer',
  data() {
    return {
      checkTrdList: [],
      checkHosList: [],
      bus: [
        {
          "lnglat": [116.486409,39.921489],
          "attributes": {"name": "公交站1",id: '001'}
        },
        {
          "lnglat": [116.286968,39.863642],
          "attributes": {"name": "公交站2",id: '002'}
        },
        {
          "lnglat": [116.195445,39.914601],
          "attributes": {"name": "公交站3",id: '003'}
        },
        {
          "lnglat": [116.310316,39.956074],
          "attributes": {"name": "公交站4",id: '004'}
        },
        {
          "lnglat": [116.105381,39.937183],
          "attributes": {"name": "公交站5",id: '005'}
        },
        // ...
      ],
      metro: [
        {
          "lnglat": [116.786409,39.921489],
          "attributes": {"name": "地铁1",id: '001'}
        },
        {
          "lnglat": [116.786968,39.863642],
          "attributes": {"name": "地铁2",id: '002'}
        },
        {
          "lnglat": [116.795445,39.914601],
          "attributes": {"name": "地铁3",id: '003'}
        },
        {
          "lnglat": [116.710316,39.956074],
          "attributes": {"name": "地铁4",id: '004'}
        },
        {
          "lnglat": [116.705381,39.937183],
          "attributes": {"name": "地铁5",id: '005'}
        },
        // ...
      ],
    }
  },
  mounted() {
  },
  methods: {
    changePoiList(val) {
      let obj={}
      val.forEach(item => {
        if(item==='0') {
          obj.bus=this.bus
        }
        if(item==='1') {
          obj.metro=this.metro
        }
      });

      bus.$emit('regionSelect',obj)
    }

  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#changeLayer {
  .el-row {
    line-height: 30px;
    height: 30px;
  }
}
</style>