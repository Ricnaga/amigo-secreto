import { Args, ArgsType, Field, ID, Mutation, Resolver } from 'type-graphql';
import { updateParticipanteService } from '../../../../../../../modules/Participante/services/UpdateParticipante';
import { ParticipanteTypeClass } from '../../type/participante/ParticipanteTypeClass';

@ArgsType()
class AtualizarParticipanteArgsMutationClass {
  @Field(() => ID)
  id!: string;

  @Field()
  nome!: string;

  @Field()
  presente!: string;
}

@Resolver()
export class AtualizarParticipanteMutationClass {
  @Mutation(() => ParticipanteTypeClass)
  async atualizarParticipante(
    @Args() atualizarParticipanteArgs: AtualizarParticipanteArgsMutationClass,
  ) {
    return updateParticipanteService.execute(atualizarParticipanteArgs);
  }
}
