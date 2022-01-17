import IUpdateParticipanteDTO from '../../dto/IUpdateParticipanteDTO';
import { ParticipanteRepository } from '../../repository/ParticipanteRepository';

export class UpdateParticipanteService {
  constructor(private _participanteRepository: ParticipanteRepository) {}

  execute({ id, nome, presente }: IUpdateParticipanteDTO) {
    if (nome === '')
      throw new Error('Participante sem nome, verifique novamente');

    if (presente === '')
      throw new Error('Participante sem presente, verifique novamente');

    const findParticipanteId = this._participanteRepository.findById(id);

    if (!findParticipanteId) throw new Error('Esse participante não existe');

    const updatedParticipante = this._participanteRepository.updateParticipante(
      {
        id,
        nome,
        presente,
      },
    );

    return updatedParticipante;
  }
}
