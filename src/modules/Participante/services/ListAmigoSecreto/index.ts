import { ParticipanteRepository } from '../../repository/ParticipanteRepository';
import { ListAmigoSecretoService } from './ListAmigoSecretoService';

const participanteRepository = ParticipanteRepository.getInstance();
export const listAmigoSecretoService = new ListAmigoSecretoService(
  participanteRepository,
);
