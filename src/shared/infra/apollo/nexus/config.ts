import path from 'path';

export const apolloPath = `/${process.env.NEXUS_GRAPHQL_PATH}`;

export const rootPath = path.join.bind(
  path,
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
);
