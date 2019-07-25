import axios from "axios";
import { Message } from "element-ui";
import qs from "qs";
import { getStorage } from "@/assets/js/util";

const service = axios.create({
  baseURL: "/api/v1",
  timeout: 120000
});

// 前置拦截器，加入rToken的header参数
service.interceptors.request.use(
  config => {
    let user = getStorage("user");
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (user.rToken && user.rToken.length > 0) {
      config.headers.rToken = user.rToken;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 后置拦截器，拦截403和401
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.status && res.status !== 1) {
      Message({
        showClose: true,
        message: res.msg || "Error",
        type: "error"
      });
      // TODO
      if (res.status === 401) {
        console.log("err---401");
      } else if (res.status === 403) {
        console.log("err---403");
      }
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  error => {
    Message({
      showClose: true,
      message: error.msg || "Error",
      type: "error"
    });
    return Promise.reject(error);
  }
);

const fetch = url => {
  return service({
    method: "get",
    url: url
  })
    .then(response => {
      return Promise.resolve(response.body);
    })
    .catch(error => {
      return Promise.reject(error.statusText);
    });
};
const fetchPost = (url, params = {}) => {
  return service({
    method: "post",
    url: url,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify(params)
  })
    .then(function(response) {
      return Promise.resolve(response.body);
    })
    .catch(error => {
      return Promise.reject(error.statusText);
    });
};
const uploadFile = (url, params = {}) => {
  let data = new FormData();
  Object.keys(params).forEach(key => {
    data.append(key, params[key]);
  });
  return service({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: data
  })
    .then(function(response) {
      return Promise.resolve(response.body);
    })
    .catch(error => {
      return Promise.reject(error.statusText);
    });
};

/**
 *
 * @param {*} url  请求地址
 * @param {*} method  get, post, file
 * @param {*} params  Object
 */
const fetchData = ({ url, method, params }) => {
  let path = url;
  if (method === "post") {
    return fetchPost(path, params)
      .then(res => {
        return res;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  } else if (method === "get") {
    let query = "";
    let fullUrl = "";
    if (params) {
      let array = [];
      for (let key in params) {
        if (params[key] != null) {
          array.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
          );
        }
      }
      query = array.join("&");
      fullUrl = path + "?";
    } else {
      fullUrl = path;
    }
    fullUrl = fullUrl + query;
    return fetch(fullUrl)
      .then(res => {
        return res;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  } else if (method === "file") {
    return uploadFile(path, params)
      .then(res => {
        return res;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
};

export default fetchData;
