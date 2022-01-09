import { v4 } from 'uuid';
import { Sala } from '../model/sala';

export class SalaRepository {
  private salas: Sala[];
  private static INSTANCE: SalaRepository;

  private constructor() {
    this.salas = [];
  }

  public static getInstance(): SalaRepository {
    if (!SalaRepository.INSTANCE) {
      SalaRepository.INSTANCE = new SalaRepository();
    }

    return SalaRepository.INSTANCE;
  }

  create(nomeSala: string): Sala {
    const sala = new Sala({
      id: v4(),
      nome: nomeSala,
      created_at: new Date(),
      maxParticipantes: false,
    });

    this.salas.push(sala);
    return sala;
  }
}
