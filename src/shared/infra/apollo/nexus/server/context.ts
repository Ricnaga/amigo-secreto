import { PubSub } from 'graphql-subscriptions';

type ApolloContext<U = true> = {
  amigoSecretoPubSub: U extends true ? PubSub : null;
};

export function apolloServerContext(
  amigoSecretoPubSub: PubSub,
): ApolloContext<boolean> {
  return {
    amigoSecretoPubSub,
  };
}
