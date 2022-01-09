import { extendType, list, nonNull, stringArg } from 'nexus';
import { updateAmigosSecretosService } from '../../../../../../modules/Participante/services/UpdateAmigosSecretos';

export const UpdateAmigoSecretoMutationField = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('atualizaAmigosSecretos', {
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
