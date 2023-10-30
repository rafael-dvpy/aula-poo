export class Transaction {
    idRemetente: string
    idDestinatario: string
    valor: number
    dataDeCriacao = new Date()

    constructor(idRemetente: string, idDestinatario: string, valor: number){
        this.idRemetente = idRemetente 
        this.idDestinatario = idDestinatario 
        this.valor = valor 
    }
}