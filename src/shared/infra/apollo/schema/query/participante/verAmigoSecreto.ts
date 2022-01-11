import { idArg, nonNull, queryField } from 'nexus';
import { listParticipanteService } from '../../../../../../modules/Participante/services/ListParticipante';
import { AMIGO_SECRETO_EVENT_LABEL } from '../../subscription/eventLabel';

export const VerAmigoSecretoQueryField = queryField('verAmigoSecreto', {
  type: nonNull('AmigoSecreto'),
  args: {
    id: nonNull(idArg()),
  },
  async resolve(_, args, { amigoSecretoPubSub }) {
    const listarParticipante = listParticipanteService.execute(args.id);
    amigoSecretoPubSub.publish(AMIGO_SECRETO_EVENT_LABEL, {
      liveAmigoSecreto: listarParticipante,
    });
    return listarParticipante;
  },
});
