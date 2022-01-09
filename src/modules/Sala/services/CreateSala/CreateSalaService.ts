import { SalaRepository } from '../../repository/SalaRepository';

export class CreateSalaService {
  constructor(private _salaRepository: SalaRepository) {}

  execute(nome: string) {
    return this._salaRepository.create(nome);
  }
}
