import { ApolloServer } from 'apollo-server-koa';
import { Server } from 'http';
import Koa from 'koa';
import { schema } from '../schema';
import {
  createSubscriptionServer,
  destroySubscriptionServer,
} from './subscription';

export async function createApolloServer(app: Koa, httpSv: Server) {
  const { subscriptionServer } = createSubscriptionServer(schema, httpSv);

  const instanceOfApolloServer = new ApolloServer({
    schema,
    plugins: [destroySubscriptionServer(subscriptionServer)],
  });

  instanceOfApolloServer.start().then(() =>
    instanceOfApolloServer.applyMiddleware({
      app,
      path: process.env.GRAPHQL_PATH,
    }),
  );
}
