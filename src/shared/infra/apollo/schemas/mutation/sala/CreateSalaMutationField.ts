import { extendType, nonNull, stringArg } from 'nexus';
import { createSalaService } from '../../../../../../modules/Sala/services';

export const createSalaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('criarSala', {
      type: 'Sala',
      args: {
        nomeSala: nonNull(stringArg()),
      },
      resolve(_, args) {
        return createSalaService.execute(args.nomeSala);
      },
    });
  },
});
