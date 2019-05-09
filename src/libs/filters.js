const install = Vue => {
  Vue.filter("filterTest", val => {
    switch (val) {
      case 0:
        return "否";
      case 1:
        return "是";
    }
  });
};

export default install;
