export class Sala {
  id: string;
  nomeSala: string;
  created_at: Date;

  constructor(sala: Sala) {
    this.id = sala.id;
    this.nomeSala = sala.nomeSala;
    this.created_at = sala.created_at;
  }
}
