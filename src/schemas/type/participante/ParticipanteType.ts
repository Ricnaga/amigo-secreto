import { objectType } from "nexus"

export const participanteType = objectType({
    name: 'Participante',
    definition(t) {
      t.id('id')
      t.string('nome')
      t.string('presente')
    },
  })