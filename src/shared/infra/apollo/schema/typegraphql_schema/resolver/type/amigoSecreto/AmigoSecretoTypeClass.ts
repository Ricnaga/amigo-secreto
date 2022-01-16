import { listAmigoSecretoService } from '@modules/Participante/services/ListAmigoSecreto';
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
    return listAmigoSecretoService.execute(participante.id);
  }
}
