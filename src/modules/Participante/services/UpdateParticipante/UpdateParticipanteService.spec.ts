import { ParticipanteRepository } from '@modules/Participante/repository/ParticipanteRepository';
import { UpdateParticipanteService } from './UpdateParticipanteService';

let participanteRepository: ParticipanteRepository;
let updateParticipanteService: UpdateParticipanteService;

describe('UpdateParticipanteService', () => {
  beforeEach(() => {
    participanteRepository = ParticipanteRepository.getInstance();
    updateParticipanteService = new UpdateParticipanteService(
      participanteRepository,
    );
  });

  it('should be able to update participante data', () => {
    const participante = participanteRepository.create({
      nome: 'Nome teste',
      nomeSala: 'Nome da sala teste',
      presente: 'presente teste',
    });

    const updatedParticipante = updateParticipanteService.execute({
      id: participante.id,
      nome: 'Nome teste1',
      presente: 'presente teste1',
    });

    expect(updatedParticipante.nome).toBe('Nome teste1');
    expect(updatedParticipante.presente).toBe('presente teste1');
  });

  it('should not be able to update a non-existent participante', () => {
    expect(() =>
      updateParticipanteService.execute({
        id: '',
        nome: 'Nome teste2',
        presente: 'presente teste2',
      }),
    ).toThrowError('Esse participante não existe');
  });

  it('should not be able to update participante with no name', () => {
    const participante = participanteRepository.create({
      nome: 'Nome teste3',
      nomeSala: 'Nome da sala teste3',
      presente: 'presente teste3',
    });

    expect(() =>
      updateParticipanteService.execute({
        id: participante.id,
        nome: '',
        presente: 'presente teste3',
      }),
    ).toThrowError('Participante sem nome, verifique novamente');
  });

  it('should not be able to update participante with no presente', () => {
    const participante = participanteRepository.create({
      nome: 'Nome teste4',
      nomeSala: 'Nome da sala teste4',
      presente: 'presente teste4',
    });

    expect(() =>
      updateParticipanteService.execute({
        id: participante.id,
        nome: 'Nome teste4',
        presente: '',
      }),
    ).toThrowError('Participante sem presente, verifique novamente');
  });
});
