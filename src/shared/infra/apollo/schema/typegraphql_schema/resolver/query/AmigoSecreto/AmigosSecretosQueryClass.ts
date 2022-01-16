import { listParticipantesService } from '@modules/Participante/services/ListParticipantes';
import { Arg, Query, Resolver } from 'type-graphql';
import { AmigoSecretoTypeClass } from '../../type/amigoSecreto/AmigoSecretoTypeClass';

@Resolver()
export class AmigosSecretosQueryClass {
  @Query(() => [AmigoSecretoTypeClass])
  async verAmigosSecretos(@Arg('nomeSala') nomeSala: string) {
    return listParticipantesService.execute(nomeSala);
  }
}
