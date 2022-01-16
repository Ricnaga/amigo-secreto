import { Server } from 'http';
import { initServer } from '../../server';
import { TGQL_PORT, TGQL_PATH } from './config';
import { schemaTypeGraphql } from './schema';

async function initTypeGraphQLSchema(): Promise<Server> {
  const { schema } = await schemaTypeGraphql();

  return initServer(schema, TGQL_PORT, TGQL_PATH);
}

initTypeGraphQLSchema();
