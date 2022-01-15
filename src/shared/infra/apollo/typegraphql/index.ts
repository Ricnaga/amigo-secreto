import { ApolloServer } from 'apollo-server-koa';
import { Server } from 'http';
import Koa from 'koa';
import { apolloPath } from './config';
import { apolloServerContext } from './context';
import { schemaTypeGraphql } from './schema/schema';
import {
  createSubscriptionServer,
  destroySubscriptionServer,
} from './subscription';

export async function createApolloServer(app: Koa, httpSv: Server) {
  const { schema } = await schemaTypeGraphql();

  const { subscriptionServer, amigoSecretoPubSub } = createSubscriptionServer(
    schema,
    httpSv,
  );

  const instanceOfApolloServer = new ApolloServer({
    schema,
    plugins: [destroySubscriptionServer(subscriptionServer)],
    context: apolloServerContext(amigoSecretoPubSub),
  });

  instanceOfApolloServer.start().then(() =>
    instanceOfApolloServer.applyMiddleware({
      app,
      path: apolloPath,
    }),
  );
}
