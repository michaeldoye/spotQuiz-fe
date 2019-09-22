export const SPQ_SESSION_STORAGE = {
  TOKEN: 'SPQ_USER_TOKEN'
  // APPLICATION: 'ACP_CURRENT_APPLICATION'
};

export function save(key: any, data: any, isJSON = true) {
  isJSON
    ? sessionStorage.setItem(key, JSON.stringify(data))
    : sessionStorage.setItem(key, data);
}

export function load(key: any, isJSON = true) {
  return isJSON
    ? JSON.parse(sessionStorage.getItem(key) as any)
    : sessionStorage.getItem(key);
}

export function remove(key: any) {
  sessionStorage.removeItem(key);
}

export function clear() {
  sessionStorage.clear();
}
