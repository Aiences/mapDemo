<template>
  <div class="home">
    <div class="menu_block">
      <ul class="menu_left_block" style="height:464px">
        <li
          v-for="item of list"
          :key="item.value"
          :class="{'active':item.value === activeType}"
          @click="chooseType(item.value)"
        >
          <span class="icon_box"></span>
          <span class="label_box">{{item.label}}</span>
        </li>
      </ul>

      <div class="menu_right_block" v-show="activeType < 10">
        <ul class="tab_box">
          <li
            :class="{'choosed':item.id === activeLayer}"
            v-for="item of menuList"
            :key="item.id"
            @click="chooseLayer(item)"
          >{{item.name}}</li>
        </ul>

        <ul class="detail_box">
          <li v-for="item of colorList" :key="item.label">
            <span class="detail_name_box">{{item.label}}</span>
            <span class="detail_color_box" :style="getBGColor(item.color)"></span>
          </li>
        </ul>
      </div>

      <!-- <div>
        <ul class="menu_right_block">
          <li
            v-for="item of childList"
            :key="item.value"
            @click="choosePoiLayer(item)"
            :class="{'choosed':item.checked}"
          >
            <img src="@/assets/images/home/choosed.png" class="choosed_box" v-if="item.checked" />
            <span class="label_box">{{item.label}}</span>
            <span class="count_box">10</span>
          </li>
        </ul>
      </div>-->
    </div>
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js"

export default {
  name: 'home',
  data() {
    return {
      activeRoute: '5',
      activeType: "0",
      activeLayer: '1',
      menuList: [],
      httpServer: "http://10.45.204.118:6080/arcgis/rest/services/",
      MapServer: "/MapServer/",
      findMap: {
        '0': 'asw',
        '1': 'ajt',
        '2': 'com_shopping',
        '3': 'com_education',
        '4': 'com_medical',
        '5': 'com_finance',
        '6': '',
        '7': 'com_convenience',
        '8': 'com_economy',
        '9': 'com_sports',
      },
      list: [
        {
          label: '商务中心可达性',value: '0',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '5',},{name: '街道',id: '2'}]
        },
        {
          label: '交通出行便利性',value: '1',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '17',},{name: '街道',id: '2'}]
        },
        {
          label: '消费购物便利性',value: '2',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '7',},{name: '街道',id: '2'}]
        },
        {
          label: '教育资源便利性',value: '3',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '9',},{name: '街道',id: '2'}]
        },
        {
          label: '医疗资源便利性',value: '4',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '7',},{name: '街道',id: '2'}]
        },
        {
          label: '金融服务便利性',value: '5',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '7',},{name: '街道',id: '2'}]
        },
        {
          label: '城市景观可达性',value: '6',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1'},{name: '街道',id: '2'}]
        },
        {
          label: '便民服务可达性',value: '7',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '21'},{name: '街道',id: '2'}]
        },
        {
          label: '经济环境质量性',value: '8',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '6'},{name: '街道',id: '2'}]
        },
        {
          label: '文体娱乐便利性',value: '9',
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '9'},{name: '街道',id: '2'}]
        },
        {label: '小区价格',value: '10'},
        {label: '总评分',value: '11'},
      ],
      colorList: [
        {
          label: '4000~5000',color: 'rgba(255,92,77,0.4)'
        },
        {label: '3000~4000',color: 'rgba(255,153,51,0.4)'},
        {
          label: '2000~3000',color: 'rgba(0,204,102,0.4)'
        },
        {label: '1000~2000',color: 'rgba(73,143,238,0.4)'},
        {label: '0~1000',color: 'rgba(151,151,151,0.4)'}
      ],
      paramList: {0: 'Avg_商业',1: 'Avg_交通',2: 'Avg_超市',3: 'Avg_教育',4: 'Avg_医疗',5: '',6: '',7: 'Avg_环境',8: '',9: ''}
    }
  },
  mounted() {
    this.menuList=this.list[this.activeType].children
    this.transLayer()
  },
  methods: {
    chooseType(val) {
      this.activeType=val
      this.menuList=this.list[this.activeType].children
      this.activeRoute=this.menuList[this.activeLayer].value
      this.transLayer()
    },

    choosePoiLayer() {


    },

    chooseLayer(item) {
      this.activeLayer=item.id
      this.activeRoute=item.value
      this.transLayer()
    },

    //传送当前选中的图层
    transLayer() {
      let httpString=this.httpServer+this.findMap[this.activeType]+this.MapServer+this.activeRoute

      let obj={
        httpString: httpString,
        name: this.paramList[this.activeType]
      }

      bus.$emit('featureLayerSelect',obj)

    },

    getBGColor(color) {
      return {
        background: color
      }
    }

  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.menu_block {
  width: 508px;
  clear: both;
}

.menu_left_block {
  float: left;
  box-sizing: border-box;
  padding: 16px 0;
  width: 240px;
  height: 392px;
  background: #ffffff;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow-y: auto;

  .active {
    background: #f8faff;
    color: #498fee;
  }

  li {
    box-sizing: border-box;
    height: 36px;
    padding: 8px 25px 8px 48px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #222222;
    position: relative;

    .arrow_box {
      width: 12px;
      height: 12px;
      position: absolute;
      right: 12px;
      top: 12px;
    }

    .icon_box {
      display: inline-block;
      width: 16px;
      height: 16px;
      background: #dee2ec;
      border-radius: 1px;
      position: absolute;
      left: 16px;
      top: 10px;
    }
  }
}

.menu_right_block {
  box-sizing: border-box;
  padding: 16px 0;
  max-height: 500px;
  width: 250px;
  background: #ffffff;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow-y: auto;
  float: right;

  .choosed {
    background: #f8faff;
    color: #498fee;
  }

  .tab_box {
    padding: 0 16px;
    display: table;

    li {
      float: left;
      padding: 0 18px;
      height: 32px;
      box-sizing: border-box;
      line-height: 32px;
      text-align: center;
      background: #f3f5fa;
      border-radius: 28px;
      font-weight: 500;
      color: #222222;
      margin-right: 8px;
    }

    li:last-child {
      margin-right: 0;
    }

    .choosed {
      background: #498fee;
      color: #fff;
    }
  }

  .detail_box {
    padding: 0 16px;
    margin-top: 16px;

    li {
      padding: 0;
      margin-bottom: 12px;
      height: 20px;
      line-height: 20px;
      position: relative;

      .detail_name_box {
        font-weight: 400;
        color: #222222;
        font-size: 14px;
      }

      .detail_color_box {
        display: inline-block;
        width: 121px;
        height: 12px;
        background: rgba(255, 92, 77, 0.4);
        border-radius: 1px;
        position: absolute;
        top: 4px;
        right: 0;
      }
    }
  }
}
</style>