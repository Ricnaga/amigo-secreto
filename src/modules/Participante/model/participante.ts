export class Participante {
  id: string;
  nome: string;
  presente: string;
  sala: string;
  created_at: Date;
  idAmigoSecreto?: string;

  constructor(participante: Participante) {
    this.id = participante.id;
    this.nome = participante.nome;
    this.presente = participante.presente;
    this.sala = participante.sala;
    this.created_at = participante.created_at;
  }
}
