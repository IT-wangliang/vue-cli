// 根据 key 值获取 sessionStorage 中的 value
export const getStorage = key => {
  let value = sessionStorage.getItem(key) || {};
  return JSON.parse(JSON.stringify(value));
};
