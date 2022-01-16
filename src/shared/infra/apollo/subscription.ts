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
  path: string,
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
    { server, path },
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
