<template>
  <div id="animateColor">
    <!-- 地图 -->
    <div id="viewDiv">
      <arcgisMapIndex
        class="mapBox"
        :gisModules="gisModules"
        @initmap="finishInitMap"
        ref="arcgisMapIndex"
      ></arcgisMapIndex>
    </div>
    <!-- 操作栏 -->
    <div id="sliderContainer">
      <animateTool
        ref="animateTool"
        v-on:setYear="setYear"
        :sliderValue="sliderValue"
      ></animateTool>
    </div>
  </div>
</template>
<script>
import arcgisMapIndex from "../components/arcgisMapIndex";
import animateTool from "../components/animateTool";
export default {
  name: "animateColor",
  components: {
    arcgisMapIndex,
    animateTool,
  },

  data() {
    return {
      serverUrl:
        process.env.VUE_APP_BASE_API +
        "/arcgis/rest/services/grade1/MapServer/",
      gisModules: [
        "esri/core/promiseUtils",
        "esri/config",
        "esri/widgets/Zoom",
        "esri/widgets/ScaleBar",
        "esri/tasks/support/IdentifyParameters",
        "esri/tasks/IdentifyTask",
        "esri/tasks/support/Query",
        "esri/tasks/QueryTask",
        "esri/layers/WebTileLayer",
        "esri/Map",
        "esri/widgets/Slider",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend",
      ],
      map: null,
      view: null,
      gisConstructor: null,
      currentLayer: null,
      highlight: null,
      hitTest: null,
      layerview: null,
      sliderValue: 50,
      slider: null,
      animation: null,
      tooltip: null,
    };
  },
  mounted() {},
  methods: {
    finishInitMap(val) {
      this.map = val.map;
      this.view = val.view;
      this.gisConstructor = val.gisConstructor;
      this.addSlider();
      this.addLayer();
    },

    addLayer() {
      let layer = new this.gisConstructor.FeatureLayer({
        url: this.serverUrl + 1,
        labelVisible: false,
        visible: true,
        outFields: ["*"],
      });
      this.map.add(layer);
      this.currentLayer = layer;

      // // When the layerview is available, setup hovering interactivity
      this.view
        .whenLayerView(layer)
        .then((layerview) => this.setupHoverTooltip(layerview));
    },

    //添加操作栏
    addSlider() {
      this.slider = new this.gisConstructor.Slider({
        container: "slider",
        min: 0,
        max: 100,
        values: [50],
        step: 0.25,
        visibleElements: {
          rangeLabels: true,
        },
        labelFormatFunction: function (value, type) {
          if (type === "min") {
            return "0";
          }
          if (type === "max") {
            return "100";
          }
          return value;
        },
      });

      this.slider.on("thumb-drag", this.inputHandler);
    },

    // When user drags the slider:
    //  - stops the animation
    //  - set the visualized year to the slider one.
    inputHandler(event) {
      this.$refs.animateTool.stopAnimation();
      this.setYear(event.value);
    },

    /**
     * Sets the current visualized construction year.
     */
    setYear(value) {
      this.sliderValue = Math.floor(value);
      this.slider.viewModel.setValue(0, value);
      this.currentLayer.renderer = this.createRenderer(value);
    },

    /**
     * Returns a renderer with a color visual variable driven by the input
     * year. The selected year will always render buildings built in that year
     * with a light blue color. Buildings built 20+ years before the indicated
     * year are visualized with a pink color. Buildings built within that
     * 20-year time frame are assigned a color interpolated between blue and pink.
     */
    createRenderer(year) {
      var opacityStops = [
        {
          opacity: 1,
          value: year,
        },
        {
          opacity: 0,
          value: year + 1,
        },
      ];

      return {
        type: "simple",
        symbol: {
          type: "simple-fill",
          color: "rgb(0, 0, 0)",
          outline: null,
        },
        visualVariables: [
          {
            type: "opacity",
            field: "Total",
            stops: opacityStops,
          },
          {
            type: "color",
            field: "Total",
            stops: [
              {
                value: year,
                color: "#0ff",
                label: "in " + Math.floor(year),
              },
              {
                value: year - 10,
                color: "#f0f",
                label: "in " + (Math.floor(year) - 20),
              },
              {
                value: year - 50,
                color: "#404",
                label: "before " + (Math.floor(year) - 50),
              },
            ],
          },
        ],
      };
    },

    /**
     * Sets up a moving tooltip that displays
     * the construction year of the hovered building.
     */
    setupHoverTooltip(layerview) {
      this.tooltip = this.createTooltip();
      this.hitTest = this.gisConstructor.promiseUtils.debounce((event) => {
        return this.view.hitTest(event).then((hit) => {
          var results = hit.results.filter((result) => {
            return result.graphic.layer === this.currentLayer;
          });

          if (!results.length) {
            return null;
          }

          return {
            graphic: results[0].graphic,
            screenPoint: hit.screenPoint,
          };
        });
      });

      this.view.on("pointer-move", (event) => {
        return this.hitTest(event).then(
          (hit) => {
            // remove current highlighted feature
            if (this.highlight) {
              this.highlight.remove();
              this.highlight = null;
            }

            // highlight the hovered feature
            // or hide the tooltip
            if (hit) {
              var graphic = hit.graphic;
              var screenPoint = hit.screenPoint;

              this.highlight = layerview.highlight(graphic);
              this.view.surface.style.cursor = "pointer";
              this.tooltip.show(
                screenPoint,
                "名称：" + graphic.getAttribute("Name")
              );
            } else {
              this.view.surface.style.cursor = "auto";
              this.tooltip.hide();
            }
          },
          function () {}
        );
      });

      this.watchMapClick();
    },

    //监听鼠标点击
    watchMapClick() {
      this.view.on("click", (event) => {
        this.hitTest(event).then((result) => {
          if (!result) {
            return;
          }

          this.$refs.animateTool.stopAnimation();
        });
      });
    },

    /**
     * Creates a tooltip to display a the construction year of a building.
     */
    createTooltip() {
      var tooltip = document.createElement("div");
      var style = tooltip.style;

      tooltip.setAttribute("role", "tooltip");
      tooltip.classList.add("tooltip");

      var textElement = document.createElement("div");
      textElement.classList.add("esri-widget");
      tooltip.appendChild(textElement);

      this.view.container.appendChild(tooltip);

      var x = 0;
      var y = 0;
      var targetX = 0;
      var targetY = 0;
      var visible = false;

      // move the tooltip progressively
      function move() {
        x += (targetX - x) * 0.1;
        y += (targetY - y) * 0.1;

        if (Math.abs(targetX - x) < 1 && Math.abs(targetY - y) < 1) {
          x = targetX;
          y = targetY;
        } else {
          requestAnimationFrame(move);
        }

        style.transform =
          "translate3d(" + Math.round(x) + "px," + Math.round(y) + "px, 0)";
      }

      return {
        show: function (point, text) {
          if (!visible) {
            x = point.x;
            y = point.y;
          }

          targetX = point.x;
          targetY = point.y;
          style.opacity = 1;
          visible = true;
          textElement.innerHTML = text;

          move();
        },

        hide: function () {
          style.opacity = 0;
          visible = false;
        },
      };
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#animateColor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // position: absolute;

  /**
      * Hover tooltip
      */

  /deep/ .tooltip {
    position: absolute;
    pointer-events: none;
    transition: opacity 200ms;
  }

  /deep/ .tooltip > div {
    margin: 0 auto;
    padding: 12px;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.75);
    transform: translate3d(-50%, -125%, 0);
  }

  #viewDiv {
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    order: 1;
  }

  #sliderContainer {
    flex: 0 0 80px;
    order: 2;
    padding: 0 12px;
  }
}
</style>