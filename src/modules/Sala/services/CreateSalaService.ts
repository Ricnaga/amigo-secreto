import { SalaRepository } from '../repository/SalaRepository';

export class CreateSalaService {
  constructor(private _salaRepository: SalaRepository) {}

  execute(nome: string) {
    this._salaRepository.create(nome);
  }
}
