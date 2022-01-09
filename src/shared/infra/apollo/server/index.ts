import Koa from 'koa';
import { Server } from 'http';
import { ApolloServer } from 'apollo-server-koa';
import { schema } from '../schema';
import {
  createSubscriptionServer,
  destroySubscriptionServer,
} from './subscription';
import { apolloContext } from './context';

export async function createApolloServer(app: Koa, httpSv: Server) {
  const { subscriptionServer } = createSubscriptionServer(schema, httpSv);

  const instanceOfApolloServer = new ApolloServer({
    schema,
    plugins: [destroySubscriptionServer(subscriptionServer)],
    context: apolloContext(),
  });

  instanceOfApolloServer.start().then(() =>
    instanceOfApolloServer.applyMiddleware({
      app,
      path: process.env.GRAPHQL_PATH,
    }),
  );
}
