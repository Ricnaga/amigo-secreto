import { list, nonNull, nullable, queryField, stringArg } from 'nexus';

export const VerParticipantesQueryField = queryField('verParticipantes', {
  type: nonNull(list(nonNull('Participante'))),
  args: {
    nomeSala: nonNull(stringArg()),
    idParticipante: nullable(stringArg()),
  },
  resolve() {
    return [
      {
        id: 'ID',
        nome: 'Participante 1',
        presente: 'Chinelo',
      },
    ];
  },
});
