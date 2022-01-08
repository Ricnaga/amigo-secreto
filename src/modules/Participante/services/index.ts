import { ParticipanteRepository } from '../repository/ParticipanteRepository';
import { CreateParticipanteService } from './CreateParticipanteService';

const participanteRepository = ParticipanteRepository.getInstance();
export const createParticipanteService = new CreateParticipanteService(
  participanteRepository,
);
