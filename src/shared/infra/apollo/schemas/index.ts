import { makeSchema } from 'nexus';
import path from 'path';

import * as Types from './type';
import * as Query from './query';
import * as Mutations from './mutation';

export const schema = makeSchema({
  types: [Types, Query, Mutations],
  outputs: {
    schema: path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'data/nexus-schema.graphql',
    ),
    typegen: path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'data/nexus-schema.d.ts',
    ),
  },
});
