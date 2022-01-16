import { Arg, Mutation, Resolver } from 'type-graphql';
import { createParticipanteService } from '../../../../../../../../modules/Participante/services/CreateParticipante';
import { ParticipanteTypeClass } from '../../type/participante/ParticipanteTypeClass';

@Resolver()
export class CriarParticipanteMutationClass {
  @Mutation(() => ParticipanteTypeClass)
  async criarParticipante(
    @Arg('nomeSala') nomeSala: string,
    @Arg('nome') nome: string,
    @Arg('presente') presente: string,
  ) {
    return createParticipanteService.execute({ nome, nomeSala, presente });
  }
}
