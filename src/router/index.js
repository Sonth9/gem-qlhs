import Vue from "vue";
import Router from "vue-router";

import { ROUTE_NAME, MENU_ROUTE_NAME } from "@/constants/constants";

const TrangChu = (resolve) => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(["@/views/TrangChu"], () => {
    resolve(require("@/views/TrangChu"));
  });
};

const TrangHoSo = (resolve) => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(["@/views/ho-so/TrangHoSo"], () => {
    resolve(require("@/views/ho-so/TrangHoSo"));
  });
};

const TrangTaoHoSo = (resolve) => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(["@/views/ho-so/TrangTaoHoSo"], () => {
    resolve(require("@/views/ho-so/TrangTaoHoSo"));
  });
};

const TrangCapNhatHoSo = (resolve) => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(["@/views/ho-so/TrangCapNhatHoSo"], () => {
    resolve(require("@/views/ho-so/TrangCapNhatHoSo"));
  });
};

const TrangDanhSachHoSo = (resolve) => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(["@/views/ho-so/TrangDanhSachHoSo"], () => {
    resolve(require("@/views/ho-so/TrangDanhSachHoSo"));
  });
};

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: {
        name: ROUTE_NAME.TRANG_CHU,
      },
    },
    {
      path: ROUTE_NAME.TRANG_CHU,
      name: ROUTE_NAME.TRANG_CHU,
      menuName: MENU_ROUTE_NAME.TRANG_CHU,
      component: TrangChu,
      icon: "th-large",
      isShowLeftMenu: true,
      expand: false,
    },
    {
      path: ROUTE_NAME.HO_SO.NAME,
      name: ROUTE_NAME.HO_SO.NAME,
      menuName: MENU_ROUTE_NAME.HO_SO.NAME,
      props: true,
      icon: "plus-square",
      isShowLeftMenu: true,
      expand: false,
      component: TrangHoSo,
      children: [
        {
          path: ROUTE_NAME.HO_SO.TAO,
          name: ROUTE_NAME.HO_SO.TAO,
          menuName: MENU_ROUTE_NAME.HO_SO.TAO,
          component: TrangTaoHoSo,
        },
        {
          path: ROUTE_NAME.HO_SO.DANH_SACH,
          name: ROUTE_NAME.HO_SO.DANH_SACH,
          menuName: MENU_ROUTE_NAME.HO_SO.DANH_SACH,
          component: TrangDanhSachHoSo,
        },
        {
          path: ROUTE_NAME.HO_SO.CHI_TIET,
          name: ROUTE_NAME.HO_SO.CHI_TIET,
          menuName: MENU_ROUTE_NAME.HO_SO.CHI_TIET,
          component: TrangCapNhatHoSo,
          isShowLeftMenu: false,
          props: true,
        },
      ],
    },
  ],
});

export default router;
