export function updateObject(target: { [key: string]: any }, source: { [key: string]: any }): any {
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key) && Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
}
