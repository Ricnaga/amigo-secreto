import { subscriptionField } from 'nexus';
import { Participante } from '../../../../../../modules/Participante/model/participante';
import { AMIGO_SECRETO_EVENT_LABEL } from '../eventLabel';

type AmigoSecreto = {
  liveAmigoSecreto: Participante;
};

export const amigoSecretoSubscriptionField = subscriptionField(
  'liveAmigoSecreto',
  {
    type: 'AmigoSecreto',
    subscribe(_, __, { amigoSecretoPubSub }) {
      return amigoSecretoPubSub.asyncIterator([AMIGO_SECRETO_EVENT_LABEL]);
    },
    resolve(root: AmigoSecreto) {
      return root.liveAmigoSecreto;
    },
  },
);
