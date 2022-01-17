import { ParticipanteRepository } from '@modules/Participante/repository/ParticipanteRepository';
import { ListParticipanteService } from './ListParticipanteService';

let participanteRepository: ParticipanteRepository;
let listParticipanteService: ListParticipanteService;

describe('ListParticipanteService', () => {
  beforeEach(() => {
    participanteRepository = ParticipanteRepository.getInstance();
    listParticipanteService = new ListParticipanteService(
      participanteRepository,
    );
  });

  it('should be able to list an secret friend and gift', () => {
    const participante = participanteRepository.create({
      nome: 'Nome teste 1',
      nomeSala: 'Nome Sala',
      presente: 'Presente 1',
    });

    const listParticipante = listParticipanteService.execute(participante.id);

    expect(listParticipante).toHaveProperty('id');
  });

  it('should not be able to list a non-existent secret friend', () => {
    expect(() => listParticipanteService.execute('')).toThrowError(
      'Participante inexistente',
    );
  });
});
