/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class ParticipanteTypeClass {
  @Field((type) => ID)
  id!: string;

  @Field((type) => ID)
  idAmigoSecreto!: string;

  @Field()
  nome!: string;

  @Field()
  presente!: string;
}
