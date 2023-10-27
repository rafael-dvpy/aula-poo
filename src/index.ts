let pessoa = {
    nome: "Rafael",
    email: "rafael@gmail.com",
    idade: 23,
    envelhecer () {
        this.idade += 1
        console.log(this.idade)
    }
}

class Gato {
    nome: string
    idade: number
    raca = "siames"
    constructor(nomeFornecido: string, idadeFornecido: number) {
        this.nome = nomeFornecido
        this.idade = idadeFornecido
    }

    gatoMia () {
        console.log(this.nome)
    }
}

const gato1 = new Gato("Zildagean", 2)


// Classe BankAccount
// Possui nome, id, senha e saldo
// Nome, id e senha são fornecidos na criação
// Saldo sempre começa como 0