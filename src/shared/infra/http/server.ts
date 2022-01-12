import { createServer } from 'http';
import { createApolloServer } from '../apollo/nexus/server';
import { koaApp, koaServerRequest } from './koaApp';

const httpServer = createServer(koaServerRequest);
createApolloServer(koaApp, httpServer);

httpServer.listen(process.env.PORT, () =>
  console.log(
    `Is Up on http://localhost:${process.env.PORT}/${process.env.NEXUS_GRAPHQL_PATH} - 'Quis custodiet ipsos custodes? 🤔'!`,
  ),
);
