<template>
  <div id="feature">
    <arcgisMapIndex class="mapBox" :gisModules="gisModules" ref="arcgisMapIndex"></arcgisMapIndex>

    <chooseFeature class="chooseFeature_box" ref="chooseFeature"></chooseFeature>
  </div>
</template>
<script>
import chooseFeature from "../components/chooseFeature"
import bus from "@/utils/eventBus.js"
import arcgisMapIndex from "../components/arcgisMapIndex"
export default {
  name: 'feature',
  components: {
    arcgisMapIndex,chooseFeature
  },
  data() {
    return {
      gisModules: [
        "esri/config",
        'esri/tasks/support/IdentifyParameters',
        "esri/tasks/IdentifyTask",
        "esri/tasks/support/Query",
        'esri/tasks/QueryTask',
        'esri/layers/WebTileLayer',
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend"],
      map: null,
      view: null,
      gisConstructor: null,
      searchUrl: null,
      highlight: null,
        typeName: { 0: 'CourtName', 1: 'blockno', 2: 'jdxzmc', 3: 'xzqmc' },
        typeId1: { 0: 'houseid', 1: 'blockno', 2: 'jdxzdm', 3: 'xzqdm' },
        typeId2: { 0: 'houseid', 1: 'BlockId', 2: 'jdxzdm', 3: 'XZQDM' },
      type: null,
    }
  },
  mounted() {
    //加资源
    bus.$on('initmap',(msg) => {
      this.map=msg.map
      this.view=msg.view
      this.gisConstructor=msg.gisConstructor
      this.getCount()
    })

    //特征专题勾选图层
    bus.$on('featureLayerSelect',(msg) => {
      this.searchUrl=msg.httpString
      this.type=this.typeName[msg.type]
      this.clearMap()
      this.getFeatureLayer(msg)
    })

      //传送当前选中的指标
      bus.$on('target' , (msg) => {
          if (this.view.popup) {
              this.view.popup.close();
          }
          this.displayConfig.name = msg.name;
          this.displayConfig.otherName = msg.otherName;
          var r = this.featureLayer.renderer.clone();
          r.valueExpression = "$feature['" + msg.otherName + "'] * 1000";
          this.featureLayer.renderer=r;
      })


    //勾选poi图层
      bus.$on('layerSelect', (urls) => {
          var $map = this.map;
          var arr = [];
          this.map.layers.toArray().forEach(item => {
              if (item.typeFlag == 1) {
                  var url = item.url + '/' + item.layerId;
                  if (urls.indexOf(url) < 0) {
                      $map.remove(item);
                  }
                  else {
                      arr.push(url);
                  }
              }
          });
          urls.forEach(url => {
              if (arr.indexOf(url) < 0) {
                  var layer = new this.gisConstructor.FeatureLayer({
                      url: url,
                      labelVisible: false,
                      visible: true,
                      typeFlag: 1,
                      renderer: {
                          type: "simple",
                          symbol: {
                              type: "picture-marker",
                              url: "/loa.png",
                              width: "32px",
                              height: "32px"
                          }
                      },
                      outFields: ['*']
                  });
                  $map.add(layer);
              }
          })
    })

  },
  methods: {
    //获取每个图层的数量
    getCount() {
      let list=this.$refs.chooseFeature.list
      var $this=this;
      function queryCount(item) {
        var queryTask=new $this.gisConstructor.QueryTask({
          url: item.url
        });
        queryTask.executeForCount({where: ""}).then(function(count) {
          item.count=count;
        });
      }

      list.forEach(element => {
        if(element.layerList) {
          element.layerList.forEach(item => {
            queryCount(item)
          })
        }
      });
    },



    clearMap() {
      if(this.featureLayer) {
        this.map.remove(this.featureLayer)
        this.featureLayer=null
      }

    },


    //展示特征专题图
      getFeatureLayer(msg) {
          var $this = this;
          $this.displayConfig = msg;
          if ($this.view.popup) {
              $this.view.popup.close();
          }
      var globalColors=['rgba(151,151,151,0.4)','rgba(73,143,238,0.4)','rgba(0,204,102,0.4)','rgba(255,153,51,0.4)','rgba(255,92,77,0.4)'];

      function getSimpleFillSymbol(color) {
        return {
          type: "simple-fill",
          color: color,
          outline: {
            style: 'solid',
            width: 1,
            color: '#000'
          }
        }
      };
      var renderer={
        type: "class-breaks",
          //field: $this.displayConfig.otherName,
          valueExpression: "$feature['" + $this.displayConfig.otherName+"'] * 1000",
        defaultSymbol: getSimpleFillSymbol(globalColors[0]),
        classBreakInfos: [
          {
            minValue: 0,
            maxValue: 20,
            symbol: getSimpleFillSymbol(globalColors[0])
          },{
            minValue: 20,
            maxValue: 40,
            symbol: getSimpleFillSymbol(globalColors[1])
          },
          {
            minValue: 40,
            maxValue: 60,
            symbol: getSimpleFillSymbol(globalColors[2])
          },
          {
            minValue: 60,
            maxValue: 80,
            symbol: getSimpleFillSymbol(globalColors[3])
          },
          {
            minValue: 80,
            symbol: getSimpleFillSymbol(globalColors[4])
          },
        ]
      };

      function round(n,d) {
        if(d==undefined) {
          d=4;
        }
        var y=Math.pow(10,d);
        return Math.round(n*y)/y;
      }

      var queryTask=new this.gisConstructor.QueryTask({
          url: 'http://10.45.204.118:6080/arcgis/rest/services/base/MapServer/53'
      });
      var query=new this.gisConstructor.Query();
      query.returnGeometry=false;
      query.outFields=['*'];
      query.returnExceededLimitFeatures=false;
      query.start=0;
          query.num = 10;
      this.featureLayer=new this.gisConstructor.FeatureLayer({
          url: $this.displayConfig.httpString,
          typeFlag: 0,
        labelingInfo: [{
            labelExpression: "[" + this.type+"]",
          labelPlacement: "always-horizontal",
          symbol: {
            type: "text",
            color: '#FF5C4D',
            font: {
              weight: "bolder",
              size: 12
            }
          }
        }],
        outFields: ['*'],
        renderer: renderer,
          popupTemplate: {
              actions: [],
              overwriteActions: true,
              content: function (g) {
                  //console.log(g.graphic.attributes);
                  var div = document.createElement('div');
                  div.className = 'popup-div';
                  div.innerHTML = g.graphic.attributes[$this.type]+'影响因素：' + round(g.graphic.attributes[$this.displayConfig.otherName]);

                  query.where = $this.typeId2[$this.displayConfig.type] + "='" + g.graphic.attributes[$this.typeId1[$this.displayConfig.type]] + "'";
                  query.orderByFields = [$this.displayConfig.name + ' desc'];
                  console.log(query.where);
                  //query.where ='1=1'

                  queryTask.execute(query).then(function (results) {
                      //console.log(results.features);
                      for (var i = 0; i < 10 && i < results.features.length; i++) {
                          var item = results.features[i].attributes;
                          div.innerHTML += '<br />' + item.CourtName + ':' + round(item[$this.displayConfig.name]);
                      }
                  });

                  return div;
              }
          },
        blendMode: "multiply"
      });

      this.map.add(this.featureLayer);
      //this.watchMapClick();

    },

    watchMapClick() {
      let _this=this
      this.view.on("click",(event) => {
        this.view.hitTest(event).then(function(response) {
          if(response.results.length) {
            var graphic=response.results.filter(function(result) {
              return result.graphic.layer===_this.featureLayer;
            })[0].graphic;

            _this.openPopup(graphic);
            console.log(graphic);

            if(_this.highlight) {
              _this.highlight.remove()
              _this.highlight=null
            }

            _this.view.whenLayerView(graphic.layer).then(function(layerView) {
              _this.highlight=layerView.highlight(graphic);
            });
          }
        });
      })
    },

    //打开popup
    openPopup(graphic) {
      let geometry=graphic.geometry
      this.view.popup.autoOpenEnabled=false;

      if(geometry.type==="polygon") {
        this.doOpen(geometry.centroid,graphic.attributes)
      } else {
        let location={
          latitude: geometry.latitude,
          longitude: geometry.longitude
        }
        this.doOpen(location,graphic.attributes)
      }
    },


    //执行打开popup
    doOpen(location,attributes) {
      this.view.popup.open({
        // Set the popup's title to the coordinates of the location
        title: "属性",
        location: location,
        content: "id:"+attributes.OBJECTID_1, // content displayed in the popup
      });
    },

  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#feature {
  width: 100%;
  height: 100%;
  .chooseFeature_box {
    position: absolute;
    top: 65px;
    left: 10px;
  }
}
</style>