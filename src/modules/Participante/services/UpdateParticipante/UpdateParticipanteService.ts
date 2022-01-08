import IUpdateParticipanteDTO from '../../dto/IUpdateParticipanteDTO';
import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class UpdateParticipanteService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute({ id, nome, presente }: IUpdateParticipanteDTO) {
    const updatedParticipante = this._participanteRepository.update({
      id,
      nome,
      presente,
    });

    return updatedParticipante;
  }
}
