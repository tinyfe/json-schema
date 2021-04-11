'use strict';

import { generator } from '../src';

const input = {
  name: 'Rain120',
  github: 'https://github.com/rain120',
  age: 23,
  'work-time': 2.5,
  wife: null,
  info: {
    school: [
      {
        type: 'primary',
        city: 'taihe',
      },
      {
        type: 'middle',
        city: 'taihe',
      },
      {
        type: 'high',
        city: 'taihe',
      },
      {
        type: 'college',
        city: 'nanchang',
      },
    ],
    hobbit: [
      ['photograph', 5],
      ['travel', 5],
      ['eat', 4],
      ['guitar', 3],
      ['game', 3],
    ],
    job: 'FE',
    workAge: 3,
    skills: ['React', 'Node', 'Typescript'],
  },
};

const result = {
  $schema: 'http://json-schema.org/schema#',
  title: 'Root',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    github: {
      type: 'string',
    },
    age: {
      type: 'integer',
    },
    'work-time': {
      type: 'number',
    },
    wife: {
      type: 'null',
    },
    info: {
      type: 'object',
      properties: {
        school: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
              },
              city: {
                type: 'string',
              },
            },
            required: ['type', 'city'],
          },
        },
        hobbit: {
          type: 'array',
          items: {
            type: 'array',
            items: [
              {
                type: 'string',
              },
              {
                type: 'integer',
              },
            ],
            additionalItems: false,
          },
        },
        job: {
          type: 'string',
        },
        workAge: {
          type: 'integer',
        },
        skills: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      required: ['school', 'hobbit', 'job', 'workAge', 'skills'],
    },
  },
  required: ['name', 'github', 'age', 'work-time', 'wife', 'info'],
};

describe('json-schema', () => {
  test('json generator json-schema', () => {
    expect(generator({ name: 'Rain120' })).toEqual({
      $schema: 'http://json-schema.org/schema#',
      title: 'Root',
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
      },
      required: ['name'],
    });
    expect(generator(input)).toEqual(result);
  });
});
