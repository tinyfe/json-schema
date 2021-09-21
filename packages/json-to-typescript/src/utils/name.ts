import { camel } from '@tinyfe/naming-transform';
import deburr from 'lodash.deburr';

export function safeString(string: string): string {
  return deburr(camel(string));
}

export function generateName(
  from: string,
  usedName: Set<string> = new Set(),
): string {
  let name = safeString(from);

  if (!name) {
    return 'NoName';
  }

  if (usedName.has(name)) {
    let counter = 1;

    let nameWithCounter = `${name}${counter}`;

    while (usedName.has(nameWithCounter)) {
      nameWithCounter = `${name}${counter}`;
      counter++;
    }

    name = nameWithCounter;
  }

  usedName.add(name);
  return name;
}
