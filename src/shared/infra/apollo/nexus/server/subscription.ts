import { execute, subscribe, GraphQLSchema } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
import { Server } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

type SubscriptionServerContext = {
  subscriptionServer: SubscriptionServer;
  amigoSecretoPubSub: PubSub;
};

export function createSubscriptionServer(
  schema: GraphQLSchema,
  server: Server,
): SubscriptionServerContext {
  const amigoSecretoPubSub = new PubSub();
  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect() {
        return {
          amigoSecretoPubSub,
        };
      },
    },
    { server, path: `/${process.env.NEXUS_GRAPHQL_PATH}` },
  );

  return { subscriptionServer, amigoSecretoPubSub };
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
