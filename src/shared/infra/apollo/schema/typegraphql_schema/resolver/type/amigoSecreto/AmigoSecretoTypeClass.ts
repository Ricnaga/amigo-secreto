import { Field, ID, ObjectType } from 'type-graphql';
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

  @Field()
  amigoSecreto!: ParticipanteTypeClass;
}
