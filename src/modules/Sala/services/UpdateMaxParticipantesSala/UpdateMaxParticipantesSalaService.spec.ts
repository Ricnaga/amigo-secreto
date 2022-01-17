import { SalaRepository } from '@modules/Sala/repository/SalaRepository';
import { UpdateMaxParticipantesSalaService } from './UpdateMaxParticipantesSalaService';

let salaRepository: SalaRepository;
let updateMaxParticipantesSalaService: UpdateMaxParticipantesSalaService;

describe('UpdateMaxParticipantesSalaService', () => {
  beforeEach(() => {
    salaRepository = SalaRepository.getInstance();
    updateMaxParticipantesSalaService = new UpdateMaxParticipantesSalaService(
      salaRepository,
    );

    salaRepository.create('Nome teste');
  });

  it('should be able to block room', () => {
    const blockSala = updateMaxParticipantesSalaService.execute('Nome teste');
    expect(blockSala.maxParticipantes).toBe(true);
  });

  it('should not to be able to block a non-existent room', () => {
    expect(() => updateMaxParticipantesSalaService.execute('')).toThrow(
      'Sala não existente',
    );
  });

  it('should be able to block room one time', () => {
    expect(() =>
      updateMaxParticipantesSalaService.execute('Nome teste'),
    ).toThrow('Essa sala ja foi bloqueada');
  });
});
