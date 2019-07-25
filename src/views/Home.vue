<template>
  <div id="home">
    <el-container style="height:100%">
      <el-header height="100px">
        <Header></Header>
      </el-header>
      <el-container style="height:calc(100% - 100px)">
        <el-aside width="auto">
          <SlideMenu></SlideMenu>
        </el-aside>
        <el-main>
          <Breadcrumb></Breadcrumb>
          <router-view class="routerView"></router-view>
        </el-main>
      </el-container>
    </el-container>
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
  }
};
</script>

<style lang="less" scoped>
#home {
  height: 100%;
}
.routerView {
  height: calc(100% - 25px);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
}
.el-header {
  background-color: rgba(21, 54, 241, 0.1);
  color: #fff;
}
.el-aside {
  overflow: hidden;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
.el-main {
  padding: 0;
}
</style>
