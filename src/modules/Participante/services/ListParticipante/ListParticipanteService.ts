import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class ListParticipanteService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute(id: string) {
    return this._participanteRepository.findById(id);
  }
}
