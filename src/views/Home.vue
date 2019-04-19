<template>
  <div id="home">
    <Header></Header>
    <SlideMenu></SlideMenu>
    <router-view></router-view>
    <Fooder></Fooder>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Fooder from "@/components/layout/Fooder";
import SlideMenu from "@/components/layout/SlideMenu";
export default {
  components: {
    Header,
    Fooder,
    SlideMenu
  }
};
</script>

<style lang="less" scoped></style>
