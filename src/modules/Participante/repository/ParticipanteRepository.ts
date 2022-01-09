import { v4 } from 'uuid';
import ICreateParticipanteDTO from '../dto/ICreateParticipanteDTO';
import IUpdateParticipanteDTO from '../dto/IUpdateParticipanteDTO';
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

  findById(id: string): Participante {
    const participante = this.participantes.find(
      (participante) => participante.id === id,
    );

    return (
      participante || {
        id: '',
        sala: '',
        nome: '',
        presente: '',
        idAmigoSecreto: '',
        created_at: new Date(),
      }
    );
  }

  updateParticipante({
    id,
    nome,
    presente,
  }: IUpdateParticipanteDTO): Participante {
    const participante = this.findById(id);

    participante.nome = nome;
    participante.presente = presente;

    return participante;
  }

  updateAmigosSecretos(nomeSala: string) {
    const participantes = this.participantes.filter(
      (participante) => participante.sala === nomeSala,
    );

    const updateAmigo = participantes.map((participante, index) => {
      if (index === participantes.length - 1) {
        participante.idAmigoSecreto = participantes[0].id;

        return participante;
      }

      participante.idAmigoSecreto = participantes[index + 1].id;
      return participante;
    });

    return updateAmigo;
  }
}
