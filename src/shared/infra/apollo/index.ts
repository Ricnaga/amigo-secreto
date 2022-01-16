import { ApolloServer } from 'apollo-server-koa';
import { GraphQLSchema } from 'graphql';
import { Server } from 'http';
import Koa from 'koa';
import { apolloServerContext } from './context';
import {
  createSubscriptionServer,
  destroySubscriptionServer,
} from './subscription';

export async function createApolloServer(
  schema: GraphQLSchema,
  app: Koa,
  httpSv: Server,
  path: string,
) {
  const { subscriptionServer, amigoSecretoPubSub } = createSubscriptionServer(
    schema,
    httpSv,
    path,
  );
  console.log(path);
  const instanceOfApolloServer = new ApolloServer({
    schema,
    plugins: [destroySubscriptionServer(subscriptionServer)],
    context: apolloServerContext(amigoSecretoPubSub),
  });

  instanceOfApolloServer.start().then(() =>
    instanceOfApolloServer.applyMiddleware({
      app,
      path,
    }),
  );
}
