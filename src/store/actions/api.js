import Vue from "vue";
import axios from "axios";
import qs from "qs";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "/api/v1";
Vue.axios.defaults.timeout = 120000;
Vue.axios.defaults.withCredentials = true;

// 前置拦截器，加入rToken的header参数
// Vue.axios.interceptors.request.use(
//   config => {
//     let user = getUser();
//     // 判断是否存在token，如果存在的话，则每个http header都加上token
//     if (user.rToken && user.rToken.length > 0) {
//       config.headers.rToken = user.rToken;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

// 后置拦截器，拦截403和401
// Vue.axios.interceptors.response.use(
//   response => {
//     if (response.data && response.data.status) {
//       if (response.data.status === 401) {
//         console.log("401");
//       } else if (response.data.status === 403) {
//         console.error("403");
//         let error = {};
//         error.statusText = "没有访问权限";
//         return Promise.reject(error);
//       }
//       return response;
//     }
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

// get
export const fetch = url => {
  return Vue.axios({
    method: "get",
    url: url
  })
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error.statusText);
    });
};

// post
export const fetchPost = (url, params = {}) => {
  return Vue.axios({
    method: "post",
    url: url,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify(params)
  })
    .then(function(response) {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error.statusText);
    });
};

// FormData
export const uploadFile = (url, params = {}) => {
  let data = new FormData();
  Object.keys(params).forEach(key => {
    data.append(key, params[key]);
  });
  return Vue.axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: data
  })
    .then(function(response) {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error.statusText);
    });
};
