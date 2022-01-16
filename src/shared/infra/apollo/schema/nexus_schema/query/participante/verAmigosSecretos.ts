import { listParticipantesService } from '@modules/Participante/services/ListParticipantes';
import { list, nonNull, queryField, stringArg } from 'nexus';

export const VerAmigosSecretosQueryField = queryField('verAmigosSecretos', {
  type: nonNull(list('AmigoSecreto')),
  args: {
    nomeSala: nonNull(stringArg()),
  },
  resolve(_, args) {
    return listParticipantesService.execute(args.nomeSala);
  },
});
