import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class UpdateAmigosSecretosService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute(nomeSala: string) {
    if (nomeSala === '') throw new Error('Nome da sala inválido');

    return this._participanteRepository.updateAmigosSecretos(nomeSala);
  }
}
