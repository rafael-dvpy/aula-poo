export class Transaction {
    idRemetente: string
    idDestinatario: string
    private _valor: number
    dataDeCriacao = new Date()

    constructor(idRemetente: string, idDestinatario: string, valor: number){
        this.idRemetente = idRemetente 
        this.idDestinatario = idDestinatario 
        this._valor = valor 
    }

    get valor () {
        return this._valor
    }

    set valor (v: number) {
        this._valor = v
    }
}

const tr = new Transaction("jhaskjas", "3121331", 3000)

tr.valor = 4000

console.log(tr.valor)