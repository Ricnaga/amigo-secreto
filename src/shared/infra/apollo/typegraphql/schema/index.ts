import { NonEmptyArray } from 'type-graphql';
import { AtualizarAmigosSecretosMutationClass } from './mutation/AmigoSecreto/AtualizarAmigosSecretosMutationClass';
import { AtualizarParticipanteMutationClass } from './mutation/Participante/AtualizarParticipanteMutationClass';
import { CriarParticipanteMutationClass } from './mutation/Participante/CriarParticipanteMutationClass';
import { BloquearSalaMutationClass } from './mutation/Sala/BloquearSalaMutationClass';
import { CriarSalaMutationClass } from './mutation/Sala/CriarSalaMutationClass';
import { AmigoSecretoQueryClass } from './query/AmigoSecreto/AmigoSecretoQueryClass';
import { AmigosSecretosQueryClass } from './query/AmigoSecreto/AmigosSecretosQueryClass';

// eslint-disable-next-line @typescript-eslint/ban-types
export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  AmigosSecretosQueryClass,
  AmigoSecretoQueryClass,
  AtualizarAmigosSecretosMutationClass,
  AtualizarParticipanteMutationClass,
  CriarParticipanteMutationClass,
  BloquearSalaMutationClass,
  CriarSalaMutationClass,
];
