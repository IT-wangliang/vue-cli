<template>
  <el-breadcrumb
    separator-class="el-icon-arrow-right"
    style="padding-left:10px"
  >
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
      <span class="text">{{ item.name }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      levelList: []
    };
  },
  mounted() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched;
      matched.shift();
      this.levelList = matched;
    }
  }
};
</script>
<style lang="less" scoped>
.text {
  color: #ccc;
  font-size: 16px;
  line-height: 25px;
}
</style>
