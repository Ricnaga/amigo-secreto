import { extendType, nonNull, stringArg } from 'nexus';
import { createParticipanteService } from '../../../../../../modules/Participante/services/CreateParticipante';

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
