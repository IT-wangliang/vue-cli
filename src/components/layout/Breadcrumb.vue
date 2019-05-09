<template>
  <div class="breadcrumb">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item v-for="item in levelList" :key="item.path">{{
        item.name
      }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
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
      let matched = this.$route.matched.filter(item => item.name);
      matched.shift();
      this.levelList = matched;
    }
  }
};
</script>

<style></style>
