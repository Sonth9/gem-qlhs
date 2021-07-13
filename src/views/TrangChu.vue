<template>
  <div id="main-wrapper">
    <BaseBreadCrumb :active-item="MENU_ROUTE_NAME" />
    <Dashboard />
  </div>
</template>

<script>
import BaseBreadCrumb from "@/components/common/BaseBreadCrumb";
import Dashboard from "@/components/pages/Dashboard";
import { MENU_ROUTE_NAME } from "@/constants/constants";

export default {
  name: "TrangChu",
  components: {
    BaseBreadCrumb,
    Dashboard,
  },
  data() {
    return {
      MENU_ROUTE_NAME: MENU_ROUTE_NAME.TRANG_CHU,
    };
  },
  mounted() {},
};
</script>

<style scoped></style>
