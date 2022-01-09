import { SalaRepository } from '../../repository/SalaRepository';
import { UpdateMaxParticipantesSalaService } from './UpdateMaxParticipantesSalaService';

const salaRepository = SalaRepository.getInstance();
export const updateMaxParticipantesSala = new UpdateMaxParticipantesSalaService(
  salaRepository,
);
