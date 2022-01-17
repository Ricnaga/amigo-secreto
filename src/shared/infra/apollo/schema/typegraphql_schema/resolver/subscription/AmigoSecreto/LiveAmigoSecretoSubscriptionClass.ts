import { Root, Subscription } from 'type-graphql';
import { AmigoSecretoTypeClass } from '../../type/amigoSecreto/AmigoSecretoTypeClass';
import { AMIGO_SECRETO_TOPIC } from '../subscriptionTopics';

type AmigoSecreto = {
  liveAmigoSecreto: AmigoSecretoTypeClass;
};

export class LiveAmigoSecretoSubscriptionClass {
  @Subscription({
    subscribe: (root, args, { amigoSecretoPubSub }) => {
      return amigoSecretoPubSub.asyncIterator(AMIGO_SECRETO_TOPIC);
    },
  })
  liveAmigoSecreto(@Root() amigoSecreto: AmigoSecreto): AmigoSecretoTypeClass {
    return amigoSecreto.liveAmigoSecreto;
  }
}
