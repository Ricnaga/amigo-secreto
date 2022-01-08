import { ParticipanteRepository } from '../../repository/ParticipanteRepository';
import { UpdateParticipanteService } from './UpdateParticipanteService';

const participanteRepository = ParticipanteRepository.getInstance();
export const updateParticipanteService = new UpdateParticipanteService(
  participanteRepository,
);
