import { SalaRepository } from '../repository/SalaRepository';

export class CreateSalaService {
  constructor(private _salaRepository: SalaRepository) {}

  execute(nome: string) {
    const sala = this._salaRepository.create(nome);
    return sala;
  }
}
