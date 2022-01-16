import { Arg, Mutation, Resolver } from 'type-graphql';
import { createSalaService } from '../../../../../../../../modules/Sala/services/CreateSala';
import { SalaTypeClass } from '../../type/sala/SalaClass';

@Resolver()
export class CriarSalaMutationClass {
  @Mutation(() => SalaTypeClass)
  async criarSala(@Arg('nomeSala') nomeSala: string) {
    return createSalaService.execute(nomeSala);
  }
}
