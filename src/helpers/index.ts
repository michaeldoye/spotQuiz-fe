export function isObject(value: any) {
  return value !== null && typeof value === 'object';
}

export function isRegExp(value: any) {
  return value instanceof RegExp;
}
