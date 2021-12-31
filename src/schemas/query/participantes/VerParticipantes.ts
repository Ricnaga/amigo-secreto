import { nonNull, nullable, queryField, stringArg } from "nexus";

export const VerParticipantesQueryField = queryField('verParticipantes', {
  type: 'Participante',
  args: {
    nomeSala: nonNull(stringArg()),
    idParticipante: nullable(stringArg()),
  },
  resolve() {
    return {
      id: "ID",
      nome: "Participante 1",
      presente: "Chinelo"
    }
  },
})