import { SalaRepository } from '@modules/Sala/repository/SalaRepository';
import { CreateSalaService } from './CreateSalaService';

let salaRepository: SalaRepository;
let createSalaService: CreateSalaService;

describe('CreateSalaService', () => {
  beforeEach(() => {
    salaRepository = SalaRepository.getInstance();
    createSalaService = new CreateSalaService(salaRepository);
  });

  it('should be able to create a new room', () => {
    const SalaCreated = createSalaService.execute('Nome Sala Teste');

    expect(SalaCreated).toHaveProperty('id');
  });

  it('should not be able to create two room with the same name', () => {
    expect(() => createSalaService.execute('Nome Sala Teste')).toThrow(
      'Nome da sala já existente',
    );
  });

  it('should not be able to create room with no name or null', () => {
    expect(() => createSalaService.execute('')).toThrow(
      'Nome em branco ou nulo',
    );
  });
});
