export * from './name';
export * from './types';

export function isNotAllSame(val: any[]): boolean {
  return new Set(val).size === val.length;
}
