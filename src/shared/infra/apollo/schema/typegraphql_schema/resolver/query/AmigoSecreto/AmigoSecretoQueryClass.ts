import { listParticipanteService } from '@modules/Participante/services/ListParticipante';
import { SubscriptionServerContext } from 'shared/infra/apollo/subscription';
import { Args, ArgsType, Ctx, Field, ID, Query, Resolver } from 'type-graphql';
import { AMIGO_SECRETO_TOPIC } from '../../subscription/subscriptionTopics';
import { AmigoSecretoTypeClass } from '../../type/amigoSecreto/AmigoSecretoTypeClass';

@ArgsType()
class AmigoSecretoQueryArgs {
  @Field(() => ID)
  id!: string;
}

@Resolver()
export class AmigoSecretoQueryClass {
  @Query(() => AmigoSecretoTypeClass)
  async verAmigoSecreto(
    @Args() { id }: AmigoSecretoQueryArgs,
    @Ctx() { amigoSecretoPubSub }: SubscriptionServerContext,
  ) {
    const listarParticipante = listParticipanteService.execute(id);
    amigoSecretoPubSub.publish(AMIGO_SECRETO_TOPIC, {
      liveAmigoSecreto: listarParticipante,
    });
    return listarParticipante;
  }
}
