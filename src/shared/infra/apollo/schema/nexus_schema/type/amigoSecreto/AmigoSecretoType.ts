import { objectType } from 'nexus';
import { ObjectDefinitionBlock } from 'nexus/dist/blocks';
import { listAmigoSecretoService } from '../../../../../../../modules/Participante/services/ListAmigoSecreto';

export const amigoSecretoType = objectType({
  name: 'AmigoSecreto',
  definition(t: ObjectDefinitionBlock<'AmigoSecreto'>) {
    t.id('id');
    t.id('idAmigoSecreto');
    t.string('nome');
    t.string('presente');
    t.field('amigoSecreto', {
      type: 'Participante',
      resolve(root) {
        if (!root.idAmigoSecreto) return null;
        return listAmigoSecretoService.execute(root.idAmigoSecreto);
      },
    });
  },
});
