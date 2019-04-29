<template>
  <div id="home">
    <Header></Header>
    <a-layout id="components-layout-demo-side">
      <a-layout-sider v-model="collapsed">
        <SlideMenu :collapsed="collapsed"></SlideMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content style="margin: 0 16px">
          <div style="display:flex;align-items: center;">
            <a-icon
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="collapsed = !collapsed"
              class="trigger"
            ></a-icon>
            <Breadcrumb></Breadcrumb>
          </div>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import SlideMenu from "@/components/layout/SlideMenu";
import Breadcrumb from "@/components/layout/Breadcrumb";
export default {
  name: "Home",
  components: {
    Header,
    SlideMenu,
    Breadcrumb
  },
  created() {},
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="less" scoped>
#home {
  height: 100%;
}
#components-layout-demo-side {
  height: calc(100% - 60px);
}
.trigger {
  font-size: 20px;
  padding: 0 15px;
  line-height: 53px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #1890ff;
  }
}
</style>
