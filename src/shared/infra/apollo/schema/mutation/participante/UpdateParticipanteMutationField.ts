import { extendType, idArg, nonNull, stringArg } from 'nexus';
import { updateParticipanteService } from '../../../../../../modules/Participante/services/UpdateParticipante';

export const updateParticipanteMutationField = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('atualizarParticipante', {
      type: 'Participante',
      args: {
        id: nonNull(idArg()),
        nome: nonNull(stringArg()),
        presente: nonNull(stringArg()),
      },
      resolve(_, args) {
        return updateParticipanteService.execute(args);
      },
    });
  },
});
