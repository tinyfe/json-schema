import { getTypeString } from '@tinyfe/type-of';
import { Options } from 'index';
import { AST } from './types/ast';
import { generateName, isArray, isNotAllSame } from './utils';

export function tupleTypes(name: string, value: any[], options?: Options) {
  const tuple = value.map(item => {
    const type = getTypeString(item).toUpperCase();
    if (['STRING', 'NUMBER', 'BOOLEAN', 'NULL'].includes(type)) {
      return type;
    } else {
      return parse(item, {
        ...options,
        rootName: name,
      });
    }
  });

  // [1, 'Rain120', [1], {age: 18}] => [number, string, number[], {age: number}]
  // [1, 1, 1, 1] => [number]
  return isNotAllSame(tuple) ? tuple : [tuple[0]];
}

export function parse(json: any, options?: Options): AST[] {
  const ast: AST[] = [];

  if (isArray(json)) {
    json.forEach((item: JSON) => {
      ast.push(parser(item, options));
    });
  } else {
    ast.push(parser(json, options));
  }

  return ast;
}

export function parser(json: JSON, options?: Options) {
  let ast: AST = {
    type: 'INTERFACE',
    params: [],
    standaloneName: options?.rootName,
  };

  Object.keys(json).forEach(key => {
    const value = json[key];
    const type = getTypeString(value).toUpperCase();
    let childAST = {};

    switch (type) {
      case 'STRING':
      case 'NUMBER':
      case 'BOOLEAN':
      case 'NULL':
        childAST = {
          type,
          keyName: key,
          standaloneName: generateName(key),
        };
        break;

      case 'ARRAY':
        const tuple = tupleTypes(key, value, options);

        childAST = {
          type: tuple.length > 1 ? 'TUPLE_ARRAY' : type,
          params: tuple,
        };
        break;

      case 'OBJECT':
        childAST = {
          type,
          params: [
            parse(value, {
              ...options,
              rootName: key,
            }),
          ],
        };
        break;
    }

    // @ts-ignore
    ast.params.push(childAST);
  });

  return ast;
}
