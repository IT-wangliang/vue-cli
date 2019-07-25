<template>
  <div class="slideMenu" :style="{ width: width }">
    <a class="logo" @click="handleCollapse">
      <img src="../../assets/image/layout/collapse.png" alt="" />
    </a>
    <el-menu
      class="mainMenu"
      router
      unique-opened
      background-color="transparent"
      text-color="#247ce0"
      active-text-color="#fff"
      :collapse="isCollapse"
      :default-active="$route.path"
    >
      <MenuItem v-for="(val, index) in menuList" :menu="val" :key="index">
      </MenuItem>
    </el-menu>
  </div>
</template>
<script>
import MenuItem from "@/components/layout/MenuItem";

export default {
  components: {
    MenuItem
  },
  data() {
    const menuList = this.$router.options.routes.filter(v => {
      return v.name == "Home";
    })[0].children;
    return {
      menuList,
      isCollapse: false,
      width: "250px"
    };
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.width = this.isCollapse ? "55px" : "250px";
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;
  display: block;
  img {
    display: inline-block;
    height: 100%;
    width: 50px;
  }
}
</style>

<style lang="less">
.mainMenu {
  border-right: none;
  .el-menu-item.is-active {
    background: linear-gradient(
      90deg,
      rgba(39, 134, 242, 0.4),
      transparent
    ) !important;
    i {
      color: #fff;
    }
  }
  .el-menu-item,
  .el-submenu__title {
    font-size: 16px;
    i {
      display: inline-block;
      color: #247ce0;
      padding-right: 10px;
      margin-right: 10px;
      font-size: 18px;
    }
  }

  .el-submenu {
    .el-menu-item {
      padding-left: 70px !important;
    }
  }
  .el-menu--collapse {
    width: 55px;
  }
}
.el-menu--popup {
  .el-menu-item,
  .el-menu-item {
    background-color: transparent !important;
    color: #fff !important;
  }
}
.el-menu-item:hover,
.el-submenu__title:hover {
  background: linear-gradient(
    90deg,
    rgba(39, 134, 242, 0.4),
    transparent
  ) !important;
}
</style>
