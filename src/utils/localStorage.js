export const LOCAL_STORAGE_KEY = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
};

export function getValueFromStorageByKey(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setValueToStorageByKey(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeValueToStorageByKey(key) {
  localStorage.removeItem(key);
}
