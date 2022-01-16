import { Arg, Mutation, Resolver } from 'type-graphql';
import { updateMaxParticipantesSala } from '../../../../../../../../modules/Sala/services/UpdateMaxParticipantesSala';
import { SalaTypeClass } from '../../type/sala/SalaClass';

@Resolver()
export class BloquearSalaMutationClass {
  @Mutation(() => SalaTypeClass)
  async bloquearSala(@Arg('nomeSala') nomeSala: string) {
    return updateMaxParticipantesSala.execute(nomeSala);
  }
}
