import ENDPOINT from "@/api/endpoints";
import { HTTP, buildQueries } from "@/api/http-common";

export function callAPiLayDanhSachHoSo(payload) {
  return new Promise((resolve, reject) => {
    return HTTP.get(`${ENDPOINT.HO_SO}?${buildQueries(payload)}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function callApiTaoHoSo(payload) {
  return new Promise((resolve, reject) => {
    return HTTP.post(ENDPOINT.HO_SO, payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function callApiCapNhatHoSo(payload) {
  return new Promise((resolve, reject) => {
    return HTTP.put(ENDPOINT.HO_SO, payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function callApiXoaHoSo(payload) {
  return new Promise((resolve, reject) => {
    return HTTP.delete(ENDPOINT.HO_SO, payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
