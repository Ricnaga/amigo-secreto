import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class UpdateAmigosSecretosService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute(nomeSala: string) {
    return this._participanteRepository.updateAmigosSecretos(nomeSala);
  }
}
