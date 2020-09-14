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
      typeName: {0: 'CourtName',1: 'blockno',2: 'jdxzmc'},
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
      console.log(msg,'========msg')
      this.searchUrl=msg.httpString
      this.type=this.typeName[msg.type]
      this.clearMap()
      this.getFeatureLayer(this.searchUrl,msg.name)
    })


    //勾选poi图层
    bus.$on('layerSelect',(layers) => {
      console.log(layers,'========layers')
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
    getFeatureLayer(url,name) {
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
        field: name,
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
        url: 'http://10.45.204.118:6080/arcgis/rest/services/asw/MapServer/1'
      });
      var name2=name;
      var i=name2.indexOf('_');
      if(i>=0) {
        name2=name2.substr(i+1);
      }
      var query=new this.gisConstructor.Query();
      query.returnGeometry=false;
      query.outFields=['name',name2];
      query.orderByFields=[name2+' desc'];
      query.returnExceededLimitFeatures=false;
      query.start=0;
      query.num=10;


      this.featureLayer=new this.gisConstructor.FeatureLayer({
        url: url,
        labelingInfo: [{
          labelExpression: this.type,
          labelPlacement: "always-horizontal",
          symbol: {
            type: "text",
            color: '#fff',
            font: {
              weight: "bolder",
              size: 10
            }
          }
        }],
        outFields: [name],
        renderer: renderer,
        popupTemplate: {
          actions: [],
          overwriteActions: true,
          content: function(g) {
            console.log(g.graphic.attributes['街区编号']);
            var div=document.createElement('div');
            div.className='popup-div';
            div.innerHTML='影响因素：'+round(g.graphic.attributes[name]);

            query.where="街区编号='"+g.graphic.attributes['街区编号']+"'";
            query.where="1=1";

            queryTask.execute(query).then(function(results) {
              //console.log(results.features);
              for(var i=0;i<10&&i<results.features.length;i++) {
                var item=results.features[i].attributes;
                div.innerHTML+='<br />'+item.name+':'+round(item[name2]);
              }
            });

            return div;
          }
        },
        blendMode: "multiply"
      });

      this.map.add(this.featureLayer);
      // this.watchMapClick();

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