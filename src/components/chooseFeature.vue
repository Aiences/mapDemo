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
    </div>

    <div class="menu_type_block" v-show="activeType < 10">
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
          layerList: [
            {label: "写字楼",value: '3',type: 'point',code: 'OBJECTvalue',checked: false},
          ],
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '5',},{name: '街道',id: '2'}]
        },
        {
          label: '交通出行便利性',value: '1',
          layerList: [
            {label: '公交站',value: '5',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '长途汽车站',value: '6',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '火车站',value: '7',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '飞机场',value: '8',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '道路',value: '9',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '加油站',value: '13',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '停车场',value: '14',type: 'tyson',code: 'OBJECTvalue',checked: false},
          ],
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '17',},{name: '街道',id: '2'}]
        },
        {
          label: '消费购物便利性',value: '2',
          layerList: [
            {label: '大型超市',value: '2',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '便利店',value: '3',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '商业网店',value: '4',type: 'point',code: 'OBJECTvalue',checked: false},
          ],
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '7',},{name: '街道',id: '2'}]
        },
        {
          label: '教育资源便利性',value: '3',
          layerList: [
            {label: '幼儿园',value: '1',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '小学学区',value: '4',type: 'polygon',code: 'OBJECTvalue',checked: false},
            {label: '中学学区',value: '5',type: 'polygon',code: 'OBJECTvalue',checked: false},
            {label: '大学',value: '6',type: 'point',code: 'OBJECTvalue',checked: false},
          ],

          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '9',},{name: '街道',id: '2'}]
        },
        {
          label: '医疗资源便利性',value: '4',
          layerList: [
            {label: '三甲医院',value: '3',type: 'round',code: 'OBJECTvalue',checked: false},
            {label: '综合医院',value: '4',type: 'round',code: 'OBJECTvalue',checked: false},
            {label: '社区医院',value: '1',type: 'tyson',code: 'OBJECTvalue',checked: false},
          ],

          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '7',},{name: '街道',id: '2'}]
        },
        {
          label: '金融服务便利性',value: '5',
          layerList: [
            {label: '银行',value: '1',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '保险公司',value: '5',type: 'point',code: 'OBJECTvalue',checked: false},
          ],
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '7',},{name: '街道',id: '2'}]
        },
        {
          label: '城市景观可达性',value: '6',
          layerList: [
            {label: '口袋公园',value: '3',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '3A及以上景区',value: '4',type: 'round',code: 'OBJECTvalue',checked: false},
          ],

          children: [{name: '小区',id: '0'},{name: '街区',id: '1'},{name: '街道',id: '2'}]
        },
        {
          label: '便民服务可达性',value: '7',
          layerList: [
            {label: '汽车服务点',value: '5',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '彩票店',value: '8',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '公厕',value: '9',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '农贸市场',value: '4',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '菜场',value: '3',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '餐馆',value: '12',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '药店',value: '',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '理发店',value: '14',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '便民服务中心',value: '2',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '派出所',value: '1',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '三星级及以上酒店',value: '17',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '宾馆',value: '18',type: 'point',code: 'OBJECTvalue',checked: false},
          ],
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '21'},{name: '街道',id: '2'}]
        },
        {
          label: '经济环境质量性',value: '8',
          layerList: [
            {label: '公墓',value: '2',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '收费站',value: '3',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '产业园',value: '',type: 'round',code: 'OBJECTvalue',checked: false},
          ],
          children: [{name: '小区',id: '0'},{name: '街区',id: '1',value: '6'},{name: '街道',id: '2'}]
        },
        {
          label: '文体娱乐便利性',value: '9',
          layerList: [
            {label: '图书馆',value: '2',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '体育馆',value: '',type: 'tyson',code: 'OBJECTvalue',checked: false},
            {label: '娱乐场所',value: '6',type: 'point',code: 'OBJECTvalue',checked: false},
            {label: '健身房',value: '7',type: 'point',code: 'OBJECTvalue',checked: false},
          ],
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
      paramList: {0: 'Avg_商业',1: 'Avg_交通',2: 'Avg_超市',3: 'Avg_教育',4: 'Avg_医疗',5: '',6: '',7: 'Avg_环境',8: '',9: ''},
      childList: []
    }
  },
  mounted() {
    this.menuList=this.list[this.activeType].children
    this.childList=this.list[this.activeType].layerList
    this.transLayer()
  },
  methods: {
    chooseType(val) {
      this.activeType=val
      this.menuList=this.list[this.activeType].children
      this.activeRoute=this.menuList[this.activeLayer].value
      this.transLayer()
      this.childList=this.list[this.activeType].layerList
    },

    choosePoiLayer(item) {
      item.checked=!item.checked

      let layers=[]
      this.list.forEach((item) => {
        console.log(item,'=======item')
        if(item.layerList) {
          item.layerList.forEach((obj) => {
            if(obj.checked) {
              let id=item.value
              let route=obj.value
              let httpString=this.httpServer+this.findMap[id]+this.MapServer+route
              layers.push(httpString)
            }
          });
        }
      });

      bus.$emit('layerSelect',layers)

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
  display: table;
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
  width: 260px;
  background: #ffffff;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow-y: auto;
  float: right;

  .choosed {
    background: #f8faff;
    color: #498fee;
  }

  li {
    box-sizing: border-box;
    height: 36px;
    padding: 8px 12px 8px 32px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #222222;
    position: relative;

    .choosed_box {
      width: 12px;
      height: 12px;
      position: absolute;
      top: 12px;
      left: 12px;
    }

    .count_box {
      height: 16px;
      box-sizing: border-box;
      line-height: 12px;
      padding: 2px 11px;
      display: inline-block;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 500;
      color: #498fee;
      background: #ecf3fd;
      position: absolute;
      top: 10px;
      right: 12px;
    }
  }
}

.menu_type_block {
  box-sizing: border-box;
  padding: 16px 0;
  max-height: 500px;
  width: 250px;
  background: #ffffff;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  overflow-y: auto;

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