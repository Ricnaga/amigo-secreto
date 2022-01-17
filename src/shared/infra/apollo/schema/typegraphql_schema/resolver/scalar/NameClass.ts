import { GraphQLScalarType } from 'graphql';

export const NomeScalar = new GraphQLScalarType({
  name: 'NameClass',
  description: 'NameClass scalar',
  parseValue(value) {
    return value;
  },
  serialize(value: string) {
    return value.toUpperCase();
  },
  parseLiteral(ast) {
    return ast;
  },
});
