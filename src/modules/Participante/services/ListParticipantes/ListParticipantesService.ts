import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class ListParticipantesService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute(nomeSala: string) {
    if (nomeSala === '') throw new Error('Sala sem nome, verifique novamente');

    return this._participanteRepository.listParticipantes(nomeSala);
  }
}
