<template>
  <div>
    <BaseBreadCrumb :active-item="MENU_ROUTE_NAME" />
    <form>
      <div id="tim-kiem-thong-tin" class="box box-form">
        <div class="form-title">Thông tin tìm kiếm</div>
        <b-form-group label="Tiêu đề" label-for="title">
          <b-form-input
            v-model="searchForm.title"
            id="title"
            type="text"
            required
            placeholder="Nhập tiêu đề"
          />
        </b-form-group>
        <b-form-group label="Mô tả" label-for="description">
          <b-form-input
            v-model="searchForm.description"
            id="description"
            type="text"
            required
            placeholder="Nhập mô tả"
          />
        </b-form-group>
        <b-form-group class="border-bottom-form padding-bottom-20">
          <b-button
            class="btn search-information-btn d-block float-right"
            @click="layDanhSachHoSoPhanTrang()"
          >
            TÌM KIẾM
          </b-button>
        </b-form-group>
        <div class="box-form-result">
          <p class="color-gray-1">Tìm thấy {{ totalRows }} kết quả</p>
          <b-table
            striped
            bordered
            :no-local-sorting="true"
            :items="danhSachHoSo"
            :fields="fieldNames"
          >
            <template v-slot:head()="scope">
              <div class="d-inline-block">
                {{ scope.label }}
              </div>
            </template>
            <template v-slot:table-colgroup="scope">
              <col
                v-for="field in scope.fields"
                :key="field.key"
                :style="{ width: field.key === 'stt' ? '3%' : '' }"
              />
            </template>
            <template v-slot:cell(title)="row">
              <router-link :to="`/ho-so/${row.item.id}`">{{
                row.item.title
              }}</router-link>
            </template>
          </b-table>
        </div>
        <BasePagination
          :total-pages="totalPages"
          :total-rows="totalRows"
          :current-page="searchForm.currentPage"
          @changePages="onChangePages($event)"
          @changeNum="onChangeNum($event)"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BaseBreadCrumb from "@/components/common/BaseBreadCrumb";
import BasePagination from "@/components/common/BasePagination";
import { MENU_ROUTE_NAME } from "@/constants/constants";
import { mapGetters } from "vuex";

export default {
  name: "DanhSachHoSo",
  components: {
    BaseBreadCrumb,
    BasePagination,
  },
  data() {
    return {
      MENU_ROUTE_NAME: MENU_ROUTE_NAME.HO_SO.DANH_SACH,
      searchForm: {
        title: "",
        description: "",
        pageSize: 10,
        currentPage: 1,
      },
      totalPages: 0,
      totalRows: 0,
      fieldNames: [
        {
          key: "title",
          label: "Tiêu đề",
        },
        {
          key: "description",
          label: "Mô tả",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      danhSachHoSo: "hoSo/danhSachHoSo",
    }),
  },
  created() {
    this.$store.dispatch("hoSo/layDanhSachHoSo", {});
  },
  methods: {
    onChangeNum(pageSize) {
      this.searchForm.currentPage = 1;
      this.searchForm.pageSize = pageSize;
      this.layDanhSachHoSoPhanTrang();
    },
    onChangePages(page) {
      this.searchForm.currentPage = page;
    },
    layDanhSachHoSoPhanTrang() {
      let payload = {
        page: this.searchForm.currentPage,
        pageSize: this.searchForm.pageSize,
      };
      this.$store.dispatch("hoSo/layDanhSachHoSo", payload);
    },
  },
};
</script>

<style scoped></style>
