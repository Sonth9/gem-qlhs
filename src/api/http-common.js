import axios from "axios";
import _isNil from "lodash/isNil";
import { DOMAIN, API_VERSION } from "@/constants/constants";
import {
  LOCAL_STORAGE_KEY,
  getValueFromStorageByKey,
} from "@/utils/localStorage";

export function buildQueries(params) {
  let requestString = "";
  Object.keys(params).forEach((key) => {
    if (!_isNil(params[key]) && params[key] !== "") {
      requestString += `${key}=${params[key]}&`;
    }
  });
  return requestString;
}

export const HTTP = axios.create({
  baseURL: `${DOMAIN}${API_VERSION}`,
  headers: {
    Authorization: `Bearer ${getValueFromStorageByKey(
      LOCAL_STORAGE_KEY.ACCESS_TOKEN
    )}`,
    "Access-Control-Allow-Origin": "*",
  },
});
