import { execute, subscribe, GraphQLSchema } from 'graphql';
import { Server } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

export function createSubscriptionServer(
  schema: GraphQLSchema,
  server: Server,
) {
  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    { server, path: `/${process.env.GRAPHQL_PATH}` },
  );

  return { subscriptionServer };
}

export function destroySubscriptionServer(
  subscriptionServer: SubscriptionServer,
) {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          subscriptionServer.close();
        },
      };
    },
  };
}
