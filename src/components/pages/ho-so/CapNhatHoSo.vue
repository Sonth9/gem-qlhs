<template>
  <div>
    <BaseBreadCrumb :active-item="MENU_ROUTE_NAME" />
    <b-form>
      <div class="box box-form" id="ho-so-form">
        <div class="form-title">Thông tin hồ sơ</div>
        <b-form-group class="required" label="Tiêu đề" label-for="TieuDe">
          <b-form-input
            id="TieuDe"
            v-model="hoSoDangCapNhatNoiBo.title"
            type="text"
            required
            placeholder=""
          />
        </b-form-group>
        <b-form-group class="required" label="Nội dung" label-for="NoiDung">
          <b-form-textarea
            id="NoiDung"
            v-model="hoSoDangCapNhatNoiBo.description"
            type="text"
            required
            placeholder=""
          />
        </b-form-group>
      </div>
    </b-form>
    <div class="actions center">
      <button class="btn btn-main mb-1" @click="onUpdate">Cập nhật</button>
    </div>
  </div>
</template>

<script>
import BaseBreadCrumb from "@/components/common/BaseBreadCrumb";
import { MENU_ROUTE_NAME } from "@/constants/constants";
import { mapGetters } from "vuex";

export default {
  name: "CapNhatHoSo",
  components: {
    BaseBreadCrumb,
  },
  computed: {
    ...mapGetters({
      hoSoDangCapNhat: "hoSo/hoSoDangCapNhat",
    }),
  },
  data() {
    return {
      MENU_ROUTE_NAME: MENU_ROUTE_NAME.HO_SO.CHI_TIET,
      hoSoDangCapNhatNoiBo: {},
    };
  },
  created() {
    this.$store.dispatch("hoSo/layChiTietHoSo", {
      hoSoId: this.$router.currentRoute.params.hoSoId,
    });
  },
  watch: {
    hoSoDangCapNhat: {
      handler() {
        this.hoSoDangCapNhatNoiBo = this.hoSoDangCapNhat;
      },
    },
  },
  methods: {
    onUpdate() {
      this.$store.dispatch("hoSo/capNhatHoSo", this.hoSoDangCapNhatNoiBo);
    },
  },
};
</script>

<style scoped></style>
