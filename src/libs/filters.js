import moment from "moment";
const install = Vue => {
  //  测试用
  Vue.filter("filterTest", val => {
    switch (val) {
      case 0:
        return "否";
      case 1:
        return "是";
    }
  });
  //  日期格式化
  Vue.filter("formateDate", (value, formatString) => {
    formatString = formatString || "YYYY-MM-DD HH:mm:ss";
    if (!value || value == "") return "-";
    return moment(new Date(value)).format(formatString); // value可以是普通日期 20170723
  });
};

export default install;
