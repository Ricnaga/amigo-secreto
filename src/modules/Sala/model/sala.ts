export class Sala {
  id: string;
  nome: string;
  created_at: Date;
  maxParticipantes: boolean;

  constructor(sala: Sala) {
    this.id = sala.id;
    this.nome = sala.nome;
    this.created_at = sala.created_at;
    this.maxParticipantes = sala.maxParticipantes;
  }
}
