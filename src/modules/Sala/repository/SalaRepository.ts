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

  updateMaxParticipantes(nomeSala: string): Sala {
    const sala = this.salas.find((sala) => sala.nome === nomeSala);
    if (!sala) throw new Error('');
    sala.maxParticipantes = true;

    return sala;
  }

  findByMaxParticipantes(nomeSala: string): boolean | null {
    const findMaxParticipantes = this.salas.find(
      (sala) => sala.nome === nomeSala,
    )?.maxParticipantes;

    return findMaxParticipantes ? findMaxParticipantes : null;
  }

  findByName(nomeSala: string): string | null {
    const findSala = this.salas.find((sala) => sala.nome === nomeSala)?.nome;
    return findSala ? findSala : null;
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
