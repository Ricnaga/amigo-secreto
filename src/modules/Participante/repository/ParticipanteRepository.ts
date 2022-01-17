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

  findByName(nome: string): string | null {
    const participante = this.participantes.find(
      (participante) => participante.nome === nome,
    );

    return participante?.nome ? participante.nome : null;
  }

  findById(id: string): Participante {
    const participanteIndex = this.participantes.findIndex(
      (participante) => participante.id === id,
    );

    return this.participantes[participanteIndex];
  }

  updateParticipante({
    id,
    nome,
    presente,
  }: IUpdateParticipanteDTO): Participante {
    const participanteIndex = this.participantes.findIndex(
      (participante) => participante.id === id,
    );

    this.participantes[participanteIndex].nome = nome;
    this.participantes[participanteIndex].presente = presente;

    return this.participantes[participanteIndex];
  }

  listParticipantes(nomeSala: string): Array<Participante> {
    return this.participantes.filter(
      (participante) => participante.sala === nomeSala,
    );
  }

  updateAmigosSecretos(nomeSala: string): Array<Participante> {
    const participantes = this.listParticipantes(nomeSala);

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
