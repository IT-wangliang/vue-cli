import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
// 自动化注册全局组件
import "./components/index";

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
