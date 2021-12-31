import { createServer } from 'http';
import Koa from 'koa';
import { createApolloServer } from './apollo';

const app = new Koa();
const httpServer = createServer(app.callback());

createApolloServer(app);

httpServer.listen(process.env.PORT, () =>
  console.log(
    `Is Up on http://localhost:${process.env.PORT}/graphql - 'Quis custodiet ipsos custodes? 🤔'!`,
  ),
);
