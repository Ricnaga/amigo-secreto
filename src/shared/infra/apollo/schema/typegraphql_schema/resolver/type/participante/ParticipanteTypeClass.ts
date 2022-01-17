import { Field, ID, ObjectType } from 'type-graphql';
import { NomeScalar } from '../../scalar/NameClass';

@ObjectType()
export class ParticipanteTypeClass {
  @Field(() => ID)
  id!: string;

  @Field(() => ID, { nullable: true })
  idAmigoSecreto?: string;

  @Field(() => NomeScalar)
  nome!: string;

  @Field()
  presente!: string;
}
