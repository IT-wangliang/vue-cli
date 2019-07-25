<template>
  <div class="header">{{ title }}</div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: document.title || "全维感知综合研判平台"
    };
  },
  watch: {
    $route() {
      this.title = document.title;
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
}
</style>
