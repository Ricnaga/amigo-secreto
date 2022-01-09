import { ParticipanteRepository } from '../../repository/ParticipanteRepository';
import { ListParticipantesService } from './ListParticipantesService';

const participanteRepository = ParticipanteRepository.getInstance();
export const listParticipantesService = new ListParticipantesService(
  participanteRepository,
);
