export const DOMAIN = process.env.VUE_APP_DOMAIN
  ? process.env.VUE_APP_DOMAIN
  : "http://localhost:8000";

export const API_VERSION = process.env.VUE_APP_API_VERSION
  ? process.env.VUE_APP_API_VERSION
  : "/api";

export const ROUTE_NAME = {
  TRANG_CHU: "/trang-chu",
  HO_SO: {
    NAME: "/ho-so/",
    DANH_SACH: "danh-sach",
    CHI_TIET: ":hoSoId",
    TAO: "tao",
  },
};

export const MENU_ROUTE_NAME = {
  TRANG_CHU: "Dashboard",
  HO_SO: {
    NAME: "Hồ sơ",
    DANH_SACH: "Danh sách",
    CHI_TIET: "Chi tiết",
    TAO: "Tạo",
  },
};
