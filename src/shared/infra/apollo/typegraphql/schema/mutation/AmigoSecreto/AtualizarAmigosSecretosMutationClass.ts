import { Arg, Mutation, Resolver } from 'type-graphql';
import { updateAmigosSecretosService } from '../../../../../../../modules/Participante/services/UpdateAmigosSecretos';
import { ParticipanteTypeClass } from '../../type/participante/ParticipanteTypeClass';

@Resolver()
export class AtualizarAmigosSecretosMutationClass {
  @Mutation(() => [ParticipanteTypeClass])
  async atualizarAmigosSecretos(@Arg('nomeSala') nomeSala: string) {
    return updateAmigosSecretosService.execute(nomeSala);
  }
}
