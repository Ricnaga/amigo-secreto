import { objectType } from 'nexus';

export const participanteType = objectType({
  name: 'Participante',
  definition(t: any) {
    t.id('id');
    t.string('nome');
    t.string('presente');
  },
});
