<template>
  <div ref="chart" :style="{ width: width, height: height }"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%",
      required: true
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: "",
      timer: "" // 防抖
    };
  },
  watch: {
    option: {
      handler(val) {
        this.chart.setOption(val);
      },
      deep: true
    }
  },
  mounted() {
    addListener(this.$refs.chart, this.resizeChart);
    this.renderChart();
  },
  beforeDestroy() {
    removeListener(this.$refs.chart, this.resizeChart);
    this.chart.dispose();
    this.chart = null;
    clearTimeout(this.timer);
  },
  methods: {
    renderChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.chart.setOption(this.option);
      this.chart.off("click");
      this.chart.on("click", params => {
        this.$emit("click", params);
      });
    },
    resizeChart() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.chart.resize();
        this.timer = undefined;
      }, 300);
    }
  }
};
</script>
