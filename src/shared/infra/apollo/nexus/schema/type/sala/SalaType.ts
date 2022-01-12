import { objectType } from 'nexus';
import { ObjectDefinitionBlock } from 'nexus/dist/blocks';

export const salaType = objectType({
  name: 'Sala',
  definition(t: ObjectDefinitionBlock<'Sala'>) {
    t.id('id');
    t.string('nome');
    t.boolean('maxParticipantes');
  },
});
