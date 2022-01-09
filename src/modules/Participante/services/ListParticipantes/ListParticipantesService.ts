import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class ListParticipantesService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute(nomeSala: string) {
    return this._participanteRepository.listParticipantes(nomeSala);
  }
}
