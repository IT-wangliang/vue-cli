<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      handler(to) {
        document.title = to.name || "全维感知综合研判平台";
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  background-image: url("./assets/html.png");
  background-size: 100% 100%;
}
</style>
