import ICreateParticipanteDTO from '../../dto/ICreateParticipanteDTO';
import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class CreateParticipanteService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute({ nome, presente, nomeSala }: ICreateParticipanteDTO) {
    const participante = this._participanteRepository.create({
      nome,
      presente,
      nomeSala,
    });

    return participante;
  }
}
