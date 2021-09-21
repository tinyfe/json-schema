import { is } from '@tinyfe/type-of';

export function isString(val: any): boolean {
  return is('String', val);
}

export function isBoolean(val: any): boolean {
  return is('Boolean', val);
}

export function isNumber(val: any): boolean {
  return is('Number', val);
}

export function isNull(val: any): boolean {
  return is('Null', val);
}

export function isArray(val: any): boolean {
  return is('Array', val);
}

export function isObject(val: any): boolean {
  return is('Object', val);
}
