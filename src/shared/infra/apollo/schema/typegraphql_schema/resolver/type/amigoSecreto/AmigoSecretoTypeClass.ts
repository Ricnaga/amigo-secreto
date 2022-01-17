import { listParticipanteService } from '@modules/Participante/services/ListParticipante';
import { Field, ID, ObjectType, Root } from 'type-graphql';
import { ParticipanteTypeClass } from '../participante/ParticipanteTypeClass';

@ObjectType()
export class AmigoSecretoTypeClass {
  @Field(() => ID)
  id!: string;

  @Field(() => ID)
  idAmigoSecreto!: string;

  @Field()
  nome!: string;

  @Field()
  presente!: string;

  @Field(() => ParticipanteTypeClass)
  amigoSecreto(
    @Root() participante: ParticipanteTypeClass,
  ): ParticipanteTypeClass {
    return listParticipanteService.execute(participante.id);
  }
}
