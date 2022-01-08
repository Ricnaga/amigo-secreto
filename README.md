 - criar string de código da sala
    - mutation criarSala(nomeSala:string!)

 - criar nome da sala, nome e presente
    - mutation atualizaSalaParticipante(nomeSala:string!, nome:string!, presente:string!)

 - com id, altera nome ou presente
    - mutation alterarDadosParticipante(nomeSala:string!, nome:string!, presente:string!)

 - consultar participantes, filtro de participantes
    - query verParticipantes(nomeSala:string!, idParticipante:string)

 - com id, consulta qual amigo secreto e presente retirou
    - query checarAmigoSecreto(nomeSala:string!, id:string!)

 - consultar amigo secreto e presente de todos os participantes
    - query verAmigoSecreto(nomeSala:string!)

 - retirar amigo secreto - não pode retirar 2x
    - mutation retirarAmigoSecreto(id:string!)

 - realtime quem ja retirou e quem falta
    - mutation amigoSecretoRetirado(nomeSala:string!, idParticipante:string!, idAmigoSecreto:string!)
    - subscription liveAmigoSecreto()
