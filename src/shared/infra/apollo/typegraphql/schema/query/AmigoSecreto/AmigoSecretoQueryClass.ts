import { Args, ArgsType, Field, ID, Query, Resolver } from 'type-graphql';
import { listParticipanteService } from '../../../../../../../modules/Participante/services/ListParticipante';
import { AmigoSecretoTypeClass } from '../../type/amigoSecreto/AmigoSecretoTypeClass';

@ArgsType()
class AmigoSecretoQueryArgs {
  @Field(() => ID)
  id!: string;
}

@Resolver()
export class AmigoSecretoQueryClass {
  @Query(() => AmigoSecretoTypeClass)
  async verAmigoSecreto(@Args() { id }: AmigoSecretoQueryArgs) {
    return listParticipanteService.execute(id);
  }
}
