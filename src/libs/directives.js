const install = Vue => {
  // 权限指令
  Vue.directive("auth", {
    inserted: (el, binding) => {
      if (binding.value) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
};
export default install;
