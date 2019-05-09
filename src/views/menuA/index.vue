<template>
  <div>
    测试权限组件
    <br />
    <Authority :authority="true">
      有权限
    </Authority>
    <Authority :authority="false">
      没权限
    </Authority>
    <br />

    测试权限指令
    <div>
      <span v-auth="true">没权限</span>
      <span v-auth="false">有权限</span>
    </div>
    测试过滤器
    <div>{{ 1 | filterTest() }}</div>
    <chart
      :option="chartOption"
      height="500px"
      width="500px"
      @click="handleChartClick"
    ></chart>
  </div>
</template>

<script>
import chart from "../../components/common/chart";
export default {
  name: "modalA",
  components: {
    chart
  },
  data() {
    return {
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
  mounted() {},
  methods: {
    handleChartClick(data) {
      console.log(data);
    }
  }
};
</script>

<style></style>
