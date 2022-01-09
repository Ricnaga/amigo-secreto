import { extendType, nonNull, stringArg } from 'nexus';
import { updateMaxParticipantesSala } from '../../../../../../modules/Sala/services/UpdateMaxParticipantesSala';

export const updateSalaMutationField = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('bloquearSala', {
      type: 'Sala',
      args: {
        nomeSala: nonNull(stringArg()),
      },
      resolve(_, args) {
        return updateMaxParticipantesSala.execute(args.nomeSala);
      },
    });
  },
});
