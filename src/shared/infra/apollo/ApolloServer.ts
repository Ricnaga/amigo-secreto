import Koa from 'koa';
import { Server } from 'http';
import { ApolloServer } from 'apollo-server-koa';
import { schema } from './schemas';
import {
  createSubscriptionServer,
  destroySubscriptionServer,
} from './SubscriptionServer';

export async function createApolloServer(app: Koa, httpSv: Server) {
  const { subscriptionServer } = createSubscriptionServer(schema, httpSv);

  const instanceOfApolloServer = new ApolloServer({
    schema,
    plugins: [destroySubscriptionServer(subscriptionServer)],
  });

  instanceOfApolloServer
    .start()
    .then(() => instanceOfApolloServer.applyMiddleware({ app }));
}
