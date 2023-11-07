interface PessoaInterface {
  nome: string;
  nascimento: string;
  fala(): string
}

class Pessoa implements PessoaInterface {
  nome: string;
  nascimento: string;

  constructor(nome: string, nascimento: string) {
    this.nome = nome;
    this.nascimento = nascimento;
  }

  fala (): string {
    return "Olá"
  }
}

function retornaPessoa (pessoa: PessoaInterface) {
    return pessoa
}

const ps1 = new Pessoa("Rafael", "13829381")

const ps2 = {
    nome: "Pedro",
    nascimento: 1312321,
    fala (): string {
        return "Olá"
      }
}

console.log(retornaPessoa(ps2))
