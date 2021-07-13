<template>
  <b-dropdown class="header-account" menu-class="w-100">
    <template v-slot:button-content>
      <div class="user">
        <img src="../../assets/images/profile.png" class="avatar" />
        <div class="username">bkhdt.admin</div>
      </div>
    </template>
    <b-dropdown-item href="#">
      <font-awesome-icon icon="user" />
      <span class="pl-2">Thông tin cá nhân</span>
    </b-dropdown-item>
    <b-dropdown-item href="#" @click="dangXuat()">
      <font-awesome-icon icon="sign-out-alt" />
      <span class="pl-2">Đăng xuất</span>
    </b-dropdown-item>
  </b-dropdown>
</template>
<script>
export default {
  name: "BaseHeaderAccount",
  methods: {
    dangXuat() {},
  },
};
</script>
