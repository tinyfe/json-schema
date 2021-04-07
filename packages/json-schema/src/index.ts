// https://json-schema.org/
import { Options } from 'typings';
import generatorSchema from './generator';
import { $schema } from './version';

export function generator(
  input: any,
  options: Options = {
    v: 'schema',
  },
) {
  const { v } = options;
  const schema = generatorSchema(input);

  return Object.assign(
    {
      $schema: $schema[v],
      title: 'Root',
    },
    schema,
  );
}
