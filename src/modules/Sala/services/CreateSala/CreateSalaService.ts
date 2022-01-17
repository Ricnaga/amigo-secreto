import { SalaRepository } from '../../repository/SalaRepository';

export class CreateSalaService {
  constructor(private _salaRepository: SalaRepository) {}

  execute(nome: string) {
    if (nome === '' || !nome) throw new Error('Nome em branco ou nulo');

    const nomeSala = this._salaRepository.findByName(nome);

    if (nomeSala) throw new Error('Nome da sala já existente');

    return this._salaRepository.create(nome);
  }
}
