module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName}">
    ${compoenntName}组件
  </div>
</template>
<script>
export default {
  name: '${compoenntName}'
}
</script>
<style lang="less" scoped>
.${compoenntName} {

}
</style>
`;
  },
  entryTemplate: compoenntName => {
    return `import lazyLoading from "@/router/lazyLoading";
export default [
  {
    name: "${compoenntName}",
    path: "/${compoenntName}",
    meta: {
      icon: "edit"
    },
    component: lazyLoading("${compoenntName}", true)
  }
];`;
  }
};
