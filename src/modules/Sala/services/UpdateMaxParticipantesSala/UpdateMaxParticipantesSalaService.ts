import { SalaRepository } from '../../repository/SalaRepository';

export class UpdateMaxParticipantesSalaService {
  constructor(private _salaRepository: SalaRepository) {}

  execute(nomeSala: string) {
    if (nomeSala === '') throw new Error('Sala não existente');

    const findMaxParticipantes =
      this._salaRepository.findByMaxParticipantes(nomeSala);

    if (findMaxParticipantes) throw new Error('Essa sala ja foi bloqueada');

    return this._salaRepository.updateMaxParticipantes(nomeSala);
  }
}
