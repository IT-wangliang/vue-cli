import Vue from "vue";

// 自动注册 global 目录下的 .vue 结尾的文件
const componentsContext = require.context("./global", true, /\.vue$/);
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component);
  const ctrl = componentConfig.default || componentConfig;
  Vue.component(ctrl.name, ctrl);
});
