import ICreateParticipanteDTO from '../../dto/ICreateParticipanteDTO';
import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class CreateParticipanteService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute({ nome, presente, nomeSala }: ICreateParticipanteDTO) {
    if (nome === '')
      throw new Error(
        'Erro no nome do participante, verifique novamente por favor',
      );

    if (nomeSala === '')
      throw new Error('Erro no nome da sala, verifique novamente por favor');

    const nomeParticipante = this._participanteRepository.findByName(nome);

    if (nomeParticipante) throw new Error('Participante ja existente');

    const participante = this._participanteRepository.create({
      nome,
      presente,
      nomeSala,
    });

    return participante;
  }
}
