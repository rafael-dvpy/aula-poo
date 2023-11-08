// 1 objeto
// 3 propriedades
// 1 método com parámetro
// 1 método sem parámetro

const cachorro = {
    nome: "Adriano",
    idade: 10,
    filhotes: ["Bob"],
    fala (frase: string) {
        console.log("Olá", frase)
    },
    envelhecer () {
        this.idade += 1
    },
    anosDeCachorro () {
        const resultado = this.idade * 7
        console.log(resultado)
    }
}

cachorro.anosDeCachorro()