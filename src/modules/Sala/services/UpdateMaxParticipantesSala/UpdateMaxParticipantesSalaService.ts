import { SalaRepository } from '../../repository/SalaRepository';

export class UpdateMaxParticipantesSalaService {
  constructor(private _salaRepository: SalaRepository) {}

  execute(nomeSala: string) {
    return this._salaRepository.updateMaxParticipantes(nomeSala);
  }
}
