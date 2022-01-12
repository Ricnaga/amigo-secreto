import { makeSchema } from 'nexus';
import path from 'path';

import * as Types from './type';
import * as Query from './query';
import * as Mutations from './mutation';
import * as Subscriptions from './subscription';
import { rootPath } from '../server/config';

export const schema = makeSchema({
  types: [Types, Query, Mutations, Subscriptions],
  shouldGenerateArtifacts: true,
  outputs: {
    schema: rootPath('artifacts/nexus-schema.graphql'),
    typegen: rootPath('artifacts/nexus-schema.d.ts'),
  },
  contextType: {
    module: path.join(__dirname, '..', 'server/context.ts'),
    export: 'ApolloServerContext',
  },
});
