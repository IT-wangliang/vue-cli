import Vue from "vue";
import {
  Message,
  MessageBox,
  Loading,
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
  RadioButton,
  Input,
  Form,
  FormItem,
  Tooltip,
  DatePicker
} from "element-ui";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "@/assets/font/iconfont";
import "@/assets/style/base.css";
// 注册全局组件
import "@/components/index";
// 注册指令
import directive from "@/libs/directives";
// 注册过滤器
import filters from "@/libs/filters";
import Axios from "@/service/request";
import moment from "moment";
moment.locale("zh-CN");
const eleComponentArr = [
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
  RadioButton,
  Input,
  Form,
  FormItem,
  Tooltip,
  DatePicker
];
for (const item of eleComponentArr) {
  Vue.use(item);
}

Vue.use(directive);
Vue.use(filters);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.prototype.$http = Axios;
Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
