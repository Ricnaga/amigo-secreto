import { ParticipanteRepository } from '../../repository/ParticipanteRepository';
import { ListParticipanteService } from './ListParticipanteService';

const participanteRepository = ParticipanteRepository.getInstance();
export const listParticipanteService = new ListParticipanteService(
  participanteRepository,
);
