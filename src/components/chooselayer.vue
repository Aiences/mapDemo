<template>
  <div id="chooseLayer">
    <div v-for="(item,index) of list" :key="index">
      <el-row>{{item.name}}:</el-row>
      <el-radio-group v-model="checkTrd" @change="changePoiList">
        <el-radio
          :label="obj.route + ',' + obj.code + ',' + item.name"
          v-for="obj of item.children"
          :key="obj.route"
        >{{obj.name}}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js"
export default {
  name: 'chooseLayer',
  data() {
    return {
      checkTrd: '',
      list: [
        {
          name: '交通',
          children: [
            {name: '停车场',route: '1',type: 'tyson',code: 'OBJECTID'},
            {name: '加油站',route: '2',type: 'tyson',code: 'OBJECTID'},
            {name: '公交站',route: '3',type: 'tyson',code: 'OBJECTID'},
          ]
        },
        {
          name: '教育',
          children: [
            {name: '幼儿园',route: '3',type: 'point',code: 'OBJECTID'},
            {name: '小学学区',route: '4',type: 'point',code: 'OBJECTID'},
            {name: '中学学区',route: '5',type: 'point',code: 'OBJECTID'},
            {name: '高校',route: '6',type: 'point',code: 'OBJECTID'},
          ]
        },
        {
          name: '消费',
          children: [
            {name: '大型超市',route: '2',type: 'point',code: 'OBJECTID'},
            {name: '便利店',route: '3',type: 'point',code: 'OBJECTID'},
            {name: '商业网店',route: '4',type: 'point',code: 'OBJECTID'},
          ]
        }


      ]

    }
  },
  mounted() {
  },
  methods: {
    changePoiList(val) {
      bus.$emit('layerSelect',val)
    }
  },

  beforeDestroy() {
    bus.$off('layerSelect')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#chooseLayer {
  .el-row {
    line-height: 30px;
    height: 30px;
  }
}
</style>