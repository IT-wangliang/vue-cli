import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
// 自动化注册全局组件
import "./components/index";
// 注册指令
import directive from "./libs/directives";
import filters from "./libs/filters";

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(directive);
Vue.use(filters);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
