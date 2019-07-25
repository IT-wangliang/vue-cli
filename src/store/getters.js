const getters = {
  user: state => state.user.user, // 登录用户信息
  pickerOptions: state => state.dict.pickerOptions // date-picker 组件的 picker-options
};
export default getters;
