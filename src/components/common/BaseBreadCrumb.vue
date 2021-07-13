<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>
        <b-link :to="{ path: '/trang-chu' }">Trang chủ</b-link>
      </b-breadcrumb-item>
      <b-breadcrumb-item active>{{ activeItem }}</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BaseBreadCrumb",
  components: {},
  props: {
    activeItem: {
      type: String,
      default: "",
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
