import path from 'path';

export const apolloPath = `/${process.env.TYPEGQL_GRAPHQL_PATH}`;

export const rootPath = path.join.bind(
  path,
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
);
