import { v4 } from 'uuid';
import ICreateParticipanteDTO from '../dto/ICreateParticipanteDTO';
import { Participante } from '../model/participante';

export class ParticipanteRepository {
  private participantes: Participante[];
  private static INSTANCE: ParticipanteRepository;

  private constructor() {
    this.participantes = [];
  }

  public static getInstance(): ParticipanteRepository {
    if (!ParticipanteRepository.INSTANCE) {
      ParticipanteRepository.INSTANCE = new ParticipanteRepository();
    }

    return ParticipanteRepository.INSTANCE;
  }

  create({ nome, presente, nomeSala }: ICreateParticipanteDTO): Participante {
    const participante = new Participante({
      id: v4(),
      nome,
      presente,
      sala: nomeSala,
      created_at: new Date(),
    });

    this.participantes.push(participante);

    return participante;
  }
}
