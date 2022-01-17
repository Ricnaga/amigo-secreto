import { scalarType } from 'nexus';

export const NomeScalar = scalarType({
  name: 'Nome',
  asNexusMethod: 'Nome',
  description: 'Nome scalar',
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
