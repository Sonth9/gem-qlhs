<template>
  <div id="app">
    <div id="overlay-common" />
    <BaseHeader v-if="isLogin" />
    <BaseLeftMenu v-if="isLogin" />
    <router-view />
  </div>
</template>

<script>
import BaseHeader from "@/components/common/BaseHeader";
import BaseLeftMenu from "@/components/common/BaseLeftMenu";
export default {
  name: "App",
  metaInfo: {
    title: "Hệ thống Quản lý Hồ sơ",
    meta: [
      {
        name: "description",
        content: "Hệ thống Quản lý Hồ sơ",
      },
    ],
  },
  components: {
    BaseHeader,
    BaseLeftMenu,
  },
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>

<style lang="scss">
@import "assets/css/base/index";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
}

#app {
  font-family: "Roboto", sans-serif;
}
</style>
