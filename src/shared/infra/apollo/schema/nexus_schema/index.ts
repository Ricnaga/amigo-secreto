import { Server } from 'http';
import { initServer } from '../../server';
import { NEXUS_PATH, NEXUS_PORT } from './config';
import { schema } from './schema';

async function initGraphQLNexusSchema(): Promise<Server> {
  return initServer(schema, NEXUS_PORT, NEXUS_PATH);
}

initGraphQLNexusSchema();
