import { createServer } from 'http';
import { createApolloServer } from '../apollo/server';
import { koaApp, koaServerRequest } from './koaApp';

const httpServer = createServer(koaServerRequest);
createApolloServer(koaApp, httpServer);

httpServer.listen(process.env.PORT, () =>
  console.log(
    `Is Up on http://localhost:${process.env.PORT}/graphql - 'Quis custodiet ipsos custodes? 🤔'!`,
  ),
);
