import { SalaRepository } from '../repository/SalaRepository';
import { CreateSalaService } from './CreateSalaService';

const salaRepository = SalaRepository.getInstance();
export const createSalaService = new CreateSalaService(salaRepository);
