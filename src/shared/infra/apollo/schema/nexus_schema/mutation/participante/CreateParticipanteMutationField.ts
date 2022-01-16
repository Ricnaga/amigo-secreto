import { createParticipanteService } from '@modules/Participante/services/CreateParticipante';
import { extendType, nonNull, stringArg } from 'nexus';

export const createParticipanteMutationField = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('criarParticipante', {
      type: 'Participante',
      args: {
        nomeSala: nonNull(stringArg()),
        nome: nonNull(stringArg()),
        presente: nonNull(stringArg()),
      },
      resolve(_, args) {
        return createParticipanteService.execute(args);
      },
    });
  },
});
