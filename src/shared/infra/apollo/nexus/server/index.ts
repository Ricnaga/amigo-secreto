import { createServer } from 'http';
import { createApolloServer } from '..';
import { koaApp, koaServerRequest } from '../../../http/koaApp';

const httpServer = createServer(koaServerRequest);
createApolloServer(koaApp, httpServer);

httpServer.listen(process.env.NEXUS_PORT, () =>
  console.log(
    `Is Up on http://localhost:${process.env.NEXUS_PORT}/${process.env.NEXUS_GRAPHQL_PATH} - 'Quis custodiet ipsos custodes? 🤔'!`,
  ),
);
