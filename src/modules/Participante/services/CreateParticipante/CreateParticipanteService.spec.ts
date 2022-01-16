import { Participante } from '@modules/Participante/model/participante';
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

  it('should be able to create a new participante', () => {
    const participante = createParticipanteService.execute({
      nome: 'Nome teste',
      nomeSala: 'Sala Teste',
      presente: 'Presente teste',
    });

    expect(participante).toBeInstanceOf(Participante);
  });
});
