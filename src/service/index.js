import request from "./request";

// 登录
export const login = params => {
  return request({ url: "/login", method: "post", params });
};

// 获取平台系统参数
export const getParameter = params => {
  return request({ url: "/getParameter", method: "get", params });
};
