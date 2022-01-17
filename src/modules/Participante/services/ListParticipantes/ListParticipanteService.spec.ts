import { ParticipanteRepository } from '@modules/Participante/repository/ParticipanteRepository';
import { ListParticipantesService } from './ListParticipantesService';

let participanteRepository: ParticipanteRepository;
let listParticipantesService: ListParticipantesService;

describe('ListParticipantesService', () => {
  beforeEach(() => {
    participanteRepository = ParticipanteRepository.getInstance();
    listParticipantesService = new ListParticipantesService(
      participanteRepository,
    );

    participanteRepository.create({
      nome: 'Nome teste 1',
      nomeSala: 'Nome da sala teste',
      presente: 'presente teste 1',
    });

    participanteRepository.create({
      nome: 'Nome teste 2',
      nomeSala: 'Nome da sala teste',
      presente: 'presente teste 2',
    });
  });

  it('should be able to list all participants and secrets friends', () => {
    const participantes =
      listParticipantesService.execute('Nome da sala teste');

    expect(participantes.length).toBe(2);
  });

  it('should not be able to list all participants with no room name', () => {
    expect(() => listParticipantesService.execute('')).toThrowError(
      'Sala sem nome, verifique novamente',
    );
  });
});
