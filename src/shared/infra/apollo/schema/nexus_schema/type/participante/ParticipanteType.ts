import { objectType } from 'nexus';
import { ObjectDefinitionBlock } from 'nexus/dist/blocks';

export const participanteType = objectType({
  name: 'Participante',
  definition(t: ObjectDefinitionBlock<'Participante'>) {
    t.id('id');
    t.id('idAmigoSecreto');
    t.Nome('nome');
    t.string('presente');
  },
});
