/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class SalaTypeClass {
  @Field(() => ID)
  id!: string;

  @Field()
  nome!: string;

  @Field()
  maxParticipantes!: boolean;
}
