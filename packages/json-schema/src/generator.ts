import { integerRegex, test } from '@tinyfe/regex';
import typeOf, { is } from '@tinyfe/type-of';
import uniqWith from 'lodash.uniqwith';
import isEqual from 'lodash.isequal';

export default function generatorSchema(input: any) {
  const type = typeOf(input).type().toLowerCase();

  switch (type) {
    case 'string':
      return stringGenerator(input);
    case 'number':
      if (test(integerRegex, input)) {
        return integerGenerator(input);
      }
      return numberGenerator(input);
    case 'boolean':
      return booleanGenerator(input);
    case 'null':
      return nullGenerator(input);
    case 'array':
      return arrayGenerator(input);
    case 'object':
      return objectGenerator(input);
    case 'undefined':
      return undefined;
  }
}

function objectGenerator(input: object) {
  const schema = {
    type: 'object',
    properties: {},
    required: Object.keys(input),
  };

  for (const key in input) {
    schema.properties[key] = generatorSchema(input[key]);
  }

  return schema;
}

function arrayGenerator(input: any[]) {
  // INFO: 相同类型的聚合，不同类型的拆分
  const values = uniqWith(
    input.map(value => {
      return generatorSchema(value);
    }),
    isEqual,
  );

  const items = values.length === 1 ? values[0] : values;
  const additionalItems = values.length > 1;
  return Object.assign(
    {
      type: 'array',
      items,
    },
    additionalItems ? { additionalItems: false } : null,
  );
}

function stringGenerator(input: string) {
  return {
    type: 'string',
  };
}

function numberGenerator(input: number) {
  return {
    type: 'number',
  };
}

function integerGenerator(input: number) {
  return {
    type: 'integer',
  };
}

function booleanGenerator(input: boolean) {
  return {
    type: 'boolean',
  };
}

function nullGenerator(input: null) {
  return {
    type: 'null',
  };
}
