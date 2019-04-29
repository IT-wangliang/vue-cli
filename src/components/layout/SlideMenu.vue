<template>
  <a-menu
    mode="inline"
    theme="dark"
    :openKeys.sync="openKeys"
    :selectedKeys="selectedKeys"
  >
    <template v-for="item in menuList">
      <a-menu-item
        v-if="!item.children"
        :key="item.path"
        @click="() => $router.push(item.path)"
      >
        <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
        <span>{{ item.name }}</span>
      </a-menu-item>
      <sub-menu v-else :menu-info="item" :key="item.path" />
    </template>
  </a-menu>
</template>

<script>
import SubMenu from "./sub_menu";
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "sub-menu": SubMenu
  },
  data() {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const routes = this.$router.options.routes.filter(v => {
      return v.name == "Home";
    })[0].children;
    const menuList = this.getMenuData(routes);
    return {
      menuList,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.openKeysMap[this.$route.path]
    };
  },
  watch: {
    "$route.path": function(val) {
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.openKeysMap[val];
    },
    collapsed(to) {
      if (to) {
        this.openKeys = [];
      } else {
        this.selectedKeys = this.selectedKeysMap[this.$route.path];
        this.openKeys = this.openKeysMap[this.$route.path];
      }
    }
  },
  methods: {
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = [];
      for (let item of routes) {
        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys;
          this.selectedKeysMap[item.path] = [selectedKey || item.path];
          const newItem = { ...item };
          delete newItem.children;
          if (item.children) {
            newItem.children = this.getMenuData(item.children, [
              ...parentKeys,
              item.path
            ]);
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
        } else if (item.children) {
          menuData.push(
            ...this.getMenuData(item.children, [...parentKeys, item.path])
          );
        }
      }
      return menuData;
    }
  }
};
</script>
