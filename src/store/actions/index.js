import { fetch, fetchPost, uploadFile } from "./api.js";
import types from "../mutation-types";
import paths from "../paths";
import { message } from "ant-design-vue";

// 返回 status 处理
const receiveSuccess = ({ commit }, { res }) => {
  if (res.status === 1) {
    return Promise.resolve(res);
  } else if (res.status === 0 || res.status === 9) {
    message.warning("错误status");
    return Promise.reject(res.msg);
  } else {
    return Promise.reject(res.msg);
  }
};
// 合并 get、post
export const fetchData = ({ commit, dispatch }, { url, method, params }) => {
  let path = url in paths ? paths[url] : url;
  if (method === "post") {
    return fetchPost(path, params)
      .then(res => {
        return receiveSuccess({ commit, dispatch }, { res });
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
        return receiveSuccess({ commit, dispatch }, { res });
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
};
// 文件上传
export const upload = ({ commit, dispatch }, { url, params }) => {
  let path = url in paths ? paths[url] : url;
  return uploadFile(path, params)
    .then(res => {
      return receiveSuccess({ commit, dispatch }, { res });
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
