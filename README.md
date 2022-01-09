 - criar sala
    - mutation criarSala(nomeSala:string!)

 - criar participante
    - mutation criarParticipante(nomeSala:string!, nome:string!, presente:string!)

 - bloquear sala
    - mutation bloquearSala(nomeSala:string!)

 - dado id do participante, atualiza dados
    - mutation atualizarParticipante(id:string!, nome:string!, presente:string!)

 - atualizar amigo secreto de todos os participantes
    - mutation atualizaAmigosSecretos(nomeSala:string!)

 - listar todos os participantes e amigo secreto
    - query verAmigosSecretos(nomeSala:string!)

 - dado id do participante, listar amigo secreto e presente
    - query listarAmigoSecreto(nomeSala:string!, id:string!)

 - realtime quem ja retirou e quem falta
    - mutation amigoSecretoRetirado(nomeSala:string!, idParticipante:string!, idAmigoSecreto:string!)
    - subscription liveAmigoSecreto()
