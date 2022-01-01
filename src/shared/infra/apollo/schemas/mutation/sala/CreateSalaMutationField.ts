import { mutationField, nonNull, stringArg } from 'nexus';
import { createSalaService } from '../../../../../../modules/Sala/services';

export const createSalaMutationField = mutationField('criarSala', {
  type: 'String',
  args: {
    nomeSala: nonNull(stringArg()),
  },
  resolve(_, args) {
    createSalaService.execute(args.nomeSala);
    return `Sala ${args.nomeSala} criada com sucesso !`;
  },
});
