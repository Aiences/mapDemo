<template>
  <div id="miniMap">
    <div id="mini_box" class="mini_box"></div>
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
        this.gisConstructor = msg.gisConstructor
        this.initMiniMap()
    })

  },
        methods: {
            initMiniMap() {
                var mapView = this.view;
                var $this = this;
                var mapCenter = [119.472619, 32.403776];
                var miniMap = new this.gisConstructor.Map({
                    basemap: {
                        baseLayers: []
                    },
                    logo: false
                });
                var miniMapView = new this.gisConstructor.MapView({
                    container: "mini_box",
                    map: miniMap,
                    scale: 2200000,
                    constraints: {
                        minScale: 2200000,
                        maxScale: 50000
                    },
                    center: mapCenter
                });
                miniMapView.ui.remove("zoom");
                miniMapView.ui.remove('attribution');
                var miniLayer1 = new this.gisConstructor.FeatureLayer({
                    url: 'http://10.45.204.118:6080/arcgis/rest/services/base/MapServer/57',
                    outFields: ['*'],
                    labelingInfo: [{
                        labelExpression: "[xzqmc]",
                        labelPlacement: "always-horizontal",
                        symbol: {
                            type: "text",
                            color: 'red',
                            font: {
                                weight: "bolder",
                                size: 10
                            }
                        }
                    }],
                    maxScale: 1000000,
                    opacity: 0.6
                });
                var miniLayer2 = new this.gisConstructor.FeatureLayer({
                    url: 'http://10.45.204.118:6080/arcgis/rest/services/base/MapServer/58',
                    outFields: ['*'],
                    labelingInfo: [{
                        labelExpression: "[jdxzmc]",
                        labelPlacement: "always-horizontal",
                        symbol: {
                            type: "text",
                            color: 'red',
                            font: {
                                weight: "bolder",
                                size: 10
                            }
                        }
                    }],
                    minScale: 1000000,
                    opacity: 0.6
                });
                miniMap.add(miniLayer1);
                miniMap.add(miniLayer2);

                var miniMapOverviewGraphic, dragStartP;
                function updateMiniMapOverview() {
                    var p1 = mapView.toMap({ x: 0, y: 0 });
                    var p2 = mapView.toMap({ x: mapView.width, y: mapView.height });

                    if (miniMapOverviewGraphic) {
                        miniMapView.graphics.remove(miniMapOverviewGraphic);
                    }
                    miniMapOverviewGraphic = new $this.gisConstructor.Graphic({
                        geometry: {
                            type: "polygon",
                            hasM: false,
                            hasZ: false,
                            rings: [
                                [p1.longitude, p1.latitude],
                                [p1.longitude, p2.latitude],
                                [p2.longitude, p2.latitude],
                                [p2.longitude, p1.latitude]
                            ]
                        },
                        gFLag: 1,
                        symbol: {
                            type: "simple-fill",
                            color: [90, 90, 90, 0.3],
                            style: "solid",
                            outline: {
                                color: "red",
                                width: 1
                            }
                        }
                    });
                    miniMapView.graphics.add(miniMapOverviewGraphic);
                }

                var tm;
                function dragMiniMapOverview(event) {
                    if (dragStartP) {
                        var p1 = miniMapView.toMap({ x: event.origin.x, y: event.origin.y });
                        var p2 = miniMapView.toMap({ x: event.x, y: event.y });

                        var offsetLon = p2.longitude - p1.longitude;
                        var offsetLat = p2.latitude - p1.latitude;

                        mapView.goTo({
                            center: [dragStartP.longitude + offsetLon, dragStartP.latitude + offsetLat]
                        });
                    }
                }

                mapView.watch("extent", updateMiniMapOverview);
                miniMapView.watch("extent", updateMiniMapOverview);

                miniMapView.on("drag", function (event) {
                    if (event.action == 'start') {
                        miniMapView.hitTest(event).then(function (response) {
                            if (response.results.length) {
                                var graphics = response.results.filter(function (result) {
                                    return result.graphic.gFLag == 1;
                                });
                                if (graphics.length) {
                                    event.stopPropagation();
                                    dragStartP = mapView.center;
                                }
                            }
                        });
                    }
                    else if (event.action == 'end') {
                        event.stopPropagation();
                        dragStartP = null;
                    }
                    else if (dragStartP && event.action == 'update') {
                        event.stopPropagation();
                        if (!tm) {
                            tm = setTimeout(function () {
                                dragMiniMapOverview(event);
                                tm = null;
                            }, 10);
                        }
                    }
                });
            }
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