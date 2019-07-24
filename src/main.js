import Vue from "vue";
import {
  Icon,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Select,
  Radio,
  RadioGroup,
  RadioButton
} from "element-ui";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./assets/style/base.css";
// 自动化注册全局组件
import "./components/index";
// 注册指令
import directive from "./libs/directives";
// 注册过滤器
import filters from "./libs/filters";

Vue.config.productionTip = false;

Vue.use(directive);
Vue.use(filters);

Vue.use(Icon);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

Vue.use(Button);
Vue.use(Select);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
