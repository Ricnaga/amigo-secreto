import { list, nonNull, queryField, stringArg } from 'nexus';
import { listParticipantesService } from '../../../../../../modules/Participante/services/ListParticipantes';

export const VerAmigosSecretosQueryField = queryField('VerAmigosSecretos', {
  type: nonNull(list('AmigoSecreto')),
  args: {
    nomeSala: nonNull(stringArg()),
  },
  resolve(_, args) {
    return listParticipantesService.execute(args.nomeSala);
  },
});
