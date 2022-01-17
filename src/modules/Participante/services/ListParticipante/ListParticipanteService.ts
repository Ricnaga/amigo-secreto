import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class ListParticipanteService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute(id: string) {
    if (id === '') throw new Error('Participante inexistente');

    return this._participanteRepository.findById(id);
  }
}
