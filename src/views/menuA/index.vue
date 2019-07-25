<template>
  <div>
    <div class="line">----------------</div>
    权限指令
    <div>
      <span v-auth="true">没权限</span>
      <span v-auth="false">有权限</span>
    </div>

    <div class="line">----------------</div>

    过滤器
    <div>{{ 1 | filterTest() }}</div>
    <div>{{ new Date() | formateDate() }}</div>

    <div class="line">----------------</div>

    <el-date-picker
      v-model="timeVal"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
    >
    </el-date-picker>

    <div class="line">----------------</div>

    <Chart
      :option="chartOption"
      height="500px"
      @click="handleChartClick"
    ></Chart>
  </div>
</template>

<script>
import Chart from "@/components/common/chart";
export default {
  name: "modalA",
  components: {
    Chart
  },
  data() {
    return {
      timeVal: [],
      chartOption: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  computed: {
    pickerOptions() {
      return this.$store.getters.pickerOptions;
    }
  },
  methods: {
    handleChartClick(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="less" scoped>
.line {
  height: 20px;
  margin: 20px 0;
}
</style>
