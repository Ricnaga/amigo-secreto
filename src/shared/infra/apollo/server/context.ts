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

// import { Context as Ctx } from 'koa';
// import * as gateways from '../../gateway';
// import * as loaders from '../../loaders';

// type GraphQLUser = {
//   token: string;
//   agentId: number | null;
// };

// export type GraphQLContext<U = true> = {
//   dataloaders: typeof loaders;
//   user: U extends true ? GraphQLUser : null;
// };

// export const graphqlContext =
//   () =>
//   ({ ctx: context }: Context): GraphQLContext<boolean> => {
//     const headers = context.req.headers;
//     const authorizationBearer = headers.authorization || null;
//     const agentId = (headers.agentid as string) || null;

//     if (authorizationBearer) {
//       setGatewaysAuthorization(authorizationBearer);

//       return {
//         dataloaders: loaders,
//         user: {
//           token: authorizationBearer.replace('Bearer ', ''),
//           agentId: agentId
//             ? parseInt(Buffer.from(agentId, 'base64').toString(), 10)
//             : null,
//         },
//       };
//     }

//     return {
//       dataloaders: loaders,
//       user: null,
//     };
//   };

// function setGatewaysAuthorization(authorizationBearer: string) {
//   Object.values(gateways).forEach((gateway) => {
//     if (gateway.setAuthorization) {
//       gateway.setAuthorization(authorizationBearer);
//     }
//   });
// }
