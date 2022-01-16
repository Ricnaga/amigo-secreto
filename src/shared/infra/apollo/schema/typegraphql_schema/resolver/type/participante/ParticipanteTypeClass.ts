import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class ParticipanteTypeClass {
  @Field(() => ID)
  id!: string;

  @Field(() => ID)
  idAmigoSecreto!: string;

  @Field()
  nome!: string;

  @Field()
  presente!: string;
}
