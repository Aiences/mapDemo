<template>
  <div id="animateToolBar" class="esri-widget">
    <!-- 控制视频播放器 -->
    <span id="sliderValue">{{ sliderValue }}</span>
    <div id="sliderInnerContainer">
      <div id="slider"></div>
    </div>
    <div id="playButton" class="esri-widget esri-widget--button toggle-button">
      <div>
        <span
          class="toggle-button-icon esri-icon-play"
          aria-label="play icon"
        ></span>
        Play
      </div>
      <div>
        <span
          class="toggle-button-icon esri-icon-pause"
          aria-label="pause icon"
        ></span>
        Pause
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "animateToolBar",
  props: ["sliderValue"],
  data() {
    return {
      playButton: null,
      animation: null,
    };
  },
  mounted() {
    this.playButton = document.getElementById("playButton");

    this.playButton.addEventListener("click", () => {
      if (this.playButton.classList.contains("toggled")) {
        this.stopAnimation();
      } else {
        this.startAnimation();
      }
    });
  },
  methods: {
    /**
     * Starts the animation that cycle
     * through the gap between the two candidates.
     */
    startAnimation() {
      this.stopAnimation();
      console.log(this.sliderValue, "=======solixs");
      this.animation = this.animate(50);
      this.playButton.classList.add("toggled");
    },

    /**
     * Stops the animations
     */
    stopAnimation() {
      if (!this.animation) {
        return;
      }

      this.animation.remove();
      this.animation = null;
      this.playButton.classList.remove("toggled");
    },

    /**
     * Animates the visualized gap continously.
     */
    animate(startValue) {
      var animating = true;
      var value = startValue;

      var frame = (timestamp) => {
        if (!animating) {
          return;
        }

        value += 0.5;
        if (value > 100) {
          value = 0;
        }

        this.$emit("setYear", value);

        // Update at 30fps
        setTimeout(function () {
          requestAnimationFrame(frame);
        }, 1000 / 30);
      };

      frame();

      return {
        remove: function () {
          animating = false;
        },
      };
    },

    /**
     * Animates to a gap value.
     */
    animateTo(targetValue) {
      var animating = true;

      var frame = () => {
        if (!animating) {
          return;
        }

        var value = slider.values[0];

        if (Math.abs(targetValue - value) < 1) {
          animating = false;
          this.$emit("setGapValue", targetValue);
        } else {
          this.$emit("setGapValue", value + (targetValue - value) * 0.25);
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);

      return {
        remove: () => {
          animating = false;
        },
      };
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#animateToolBar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
}

#sliderValue {
  flex: 0 0 150px;
  order: 1;

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

#sliderInnerContainer {
  flex: 1 1 auto;
  order: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
}

#slider {
  width: 100%;
}

/**
  * Play/Stop toggle button
  */

#playButton {
  flex: 0 0 100px;
  order: 3;

  margin: 20px 0;
}

.toggle-button {
  display: flex;
}

.toggle-button.toggled .toggle-button-icon {
  color: #cc1b1b;
}

.toggle-button .toggle-button-icon {
  color: #1bcc1b;
}

.toggle-button > :nth-child(2) {
  display: none;
}

.toggle-button.toggled > :nth-child(1) {
  display: none;
}

.toggle-button.toggled > :nth-child(2) {
  display: block;
}
</style>