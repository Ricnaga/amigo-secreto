import { makeSchema } from 'nexus';
import path from 'path';

import * as Types from './type';
import * as Query from './query';
import * as Mutations from './mutation';
import * as Subscriptions from './subscription';

export const schema = makeSchema({
  types: [Types, Query, Mutations, Subscriptions],
  shouldGenerateArtifacts: true,
  outputs: {
    schema: path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'artifacts/nexus-schema.graphql',
    ),
    typegen: path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'artifacts/nexus-schema.d.ts',
    ),
  },
  contextType: {
    module: path.join(__dirname, '..', 'server/context.ts'),
    export: 'ApolloServerContext',
  },
});
