<template>
  <div>
    <BaseBreadCrumb :active-item="MENU_ROUTE_NAME" />
    <b-form>
      <div class="box box-form" id="ho-so-form">
        <div class="form-title">Thông tin hồ sơ</div>
        <b-form-group class="required" label="Tiêu đề" label-for="title">
          <b-form-input
            id="title"
            v-model="form.title"
            type="text"
            required
            placeholder=""
          />
        </b-form-group>
        <b-form-group class="required" label="Nội dung" label-for="description">
          <b-form-textarea
            id="description"
            v-model="form.description"
            type="text"
            required
            placeholder=""
          />
        </b-form-group>
      </div>
    </b-form>
    <div class="actions center">
      <button class="btn btn-main mb-1" @click="onSave">Lưu</button>
      <button class="btn btn-line mb-1" @click="onReset">Nhập lại</button>
    </div>
  </div>
</template>

<script>
import BaseBreadCrumb from "@/components/common/BaseBreadCrumb";
import { MENU_ROUTE_NAME } from "@/constants/constants";

export default {
  name: "TaoHoSo",
  components: {
    BaseBreadCrumb,
  },
  data() {
    return {
      MENU_ROUTE_NAME: MENU_ROUTE_NAME.HO_SO.TAO,
      form: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    onSave() {
      // eslint-disable-next-line no-unused-vars
      this.$store.dispatch("hoSo/taoHoSo", this.form).then((res) => {});
    },
    onReset(evt) {
      evt.preventDefault();
      this.form = {
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped></style>
