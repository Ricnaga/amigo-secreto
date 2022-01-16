import path from 'path';

export const NEXUS_PORT = String(process.env.NEXUS_PORT);
export const NEXUS_PATH = `/${process.env.NEXUS_GRAPHQL_PATH}`;

export const rootPath = path.join.bind(path, __dirname, '..', '..', '..', '..');
