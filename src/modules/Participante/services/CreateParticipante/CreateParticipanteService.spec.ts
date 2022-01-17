import { ParticipanteRepository } from '@modules/Participante/repository/ParticipanteRepository';
import { CreateParticipanteService } from './CreateParticipanteService';

let participanteRepository: ParticipanteRepository;
let createParticipanteService: CreateParticipanteService;

describe('CreateParticipanteService', () => {
  beforeEach(() => {
    participanteRepository = ParticipanteRepository.getInstance();
    createParticipanteService = new CreateParticipanteService(
      participanteRepository,
    );
  });

  it('should be able to create a new participant', () => {
    const participante = createParticipanteService.execute({
      nome: 'Nome teste1',
      nomeSala: 'Sala Teste1',
      presente: 'Presente teste1',
    });

    expect(participante).toHaveProperty('id');
  });

  it('should not be able to create two participants with same name', () => {
    expect(() =>
      createParticipanteService.execute({
        nome: 'Nome teste1',
        nomeSala: 'Sala Teste1',
        presente: 'Presente teste1',
      }),
    ).toThrow('Participante ja existente');
  });

  it('should not be able to create participant with no name', () => {
    expect(() =>
      createParticipanteService.execute({
        nome: '',
        nomeSala: 'Sala Teste',
        presente: 'Presente teste',
      }),
    ).toThrow('Erro no nome do participante, verifique novamente por favor');
  });

  it('should not be able to create participant with no room name', () => {
    expect(() =>
      createParticipanteService.execute({
        nome: 'Nome teste3',
        nomeSala: '',
        presente: 'Presente teste',
      }),
    ).toThrow('Erro no nome da sala, verifique novamente por favor');
  });
});
