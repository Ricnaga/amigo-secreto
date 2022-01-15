import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { resolvers } from '.';

type TypeGraphqlSchema = {
  schema: GraphQLSchema;
};

export async function schemaTypeGraphql(): Promise<TypeGraphqlSchema> {
  const schema = await buildSchema({
    resolvers,
  });

  return { schema };
}
