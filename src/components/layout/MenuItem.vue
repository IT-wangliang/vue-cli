<template>
  <el-submenu
    v-if="menu.children && menu.children.length > 0"
    :index="menu.path"
  >
    <template slot="title">
      <i
        v-if="menu.meta && menu.meta.icon"
        :class="`icon el-icon-${menu.meta.icon}`"
      ></i>
      <span slot="title">{{ menu.name }}</span>
    </template>
    <MenuTree
      v-for="item in menu.children"
      :key="item.menuId"
      :menu="item"
    ></MenuTree>
  </el-submenu>
  <el-menu-item v-else :index="menu.path">
    <i
      v-if="menu.meta && menu.meta.icon"
      :class="`icon el-icon-${menu.meta.icon}`"
    ></i>
    <span slot="title">{{ menu.name }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "MenuTree",
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
};
</script>
