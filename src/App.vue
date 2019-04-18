<template>
  <div id="app">
    <c-button>123</c-button>
    <router-link to="/modalA">modalA</router-link>
    <br />
    <router-link to="/modalB">modalB</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
