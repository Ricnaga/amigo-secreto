import { ParticipanteRepository } from '../../repository/ParticipanteRepository';
import { UpdateAmigosSecretosService } from './UpdateAmigosSecretosService';

const participanteRepository = ParticipanteRepository.getInstance();
export const updateAmigosSecretosService = new UpdateAmigosSecretosService(
  participanteRepository,
);
