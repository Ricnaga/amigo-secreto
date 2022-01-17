import { ParticipanteRepository } from '@modules/Participante/repository/ParticipanteRepository';
import { UpdateAmigosSecretosService } from './UpdateAmigosSecretosService';

let participanteRepository: ParticipanteRepository;
let updateAmigosSecretosService: UpdateAmigosSecretosService;

describe('UpdateAmigosSecretosService', () => {
  beforeEach(() => {
    participanteRepository = ParticipanteRepository.getInstance();
    updateAmigosSecretosService = new UpdateAmigosSecretosService(
      participanteRepository,
    );

    participanteRepository.create({
      nome: 'Nome teste 1',
      nomeSala: 'Nome Sala',
      presente: 'Presente 1',
    });

    participanteRepository.create({
      nome: 'Nome teste 2',
      nomeSala: 'Nome Sala',
      presente: 'Presente 2',
    });
  });

  it('should be able to update all participants and his secret friends', () => {
    const updatedParticipantes =
      updateAmigosSecretosService.execute('Nome Sala');
    expect(updatedParticipantes[0].idAmigoSecreto).toEqual(
      updatedParticipantes[1].id,
    );
  });

  it('should not be able to update all participants secret friends with non-existent room name', () => {
    expect(() => updateAmigosSecretosService.execute('')).toThrowError(
      'Nome da sala inválido',
    );
  });
});
