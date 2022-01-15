import 'reflect-metadata';
import { createServer } from 'http';
import { koaApp, koaServerRequest } from '../../../http/koaApp';
import { createApolloServer } from '..';

const httpServer = createServer(koaServerRequest);
createApolloServer(koaApp, httpServer);

httpServer.listen(process.env.TYPEGQL_PORT, () =>
  console.log(
    `Is Up on http://localhost:${process.env.TYPEGQL_PORT}/${process.env.TYPEGQL_GRAPHQL_PATH} - 'Quis custodiet ipsos custodes? 🤔'!`,
  ),
);
