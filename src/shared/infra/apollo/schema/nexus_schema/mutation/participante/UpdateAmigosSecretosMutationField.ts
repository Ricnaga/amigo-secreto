import { updateAmigosSecretosService } from '@modules/Participante/services/UpdateAmigosSecretos';
import { extendType, list, nonNull, stringArg } from 'nexus';

export const UpdateAmigoSecretoMutationField = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('atualizarAmigosSecretos', {
      type: list('Participante'),
      args: {
        nomeSala: nonNull(stringArg()),
      },
      resolve(_, args) {
        return updateAmigosSecretosService.execute(args.nomeSala);
      },
    });
  },
});
