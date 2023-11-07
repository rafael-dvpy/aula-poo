// -


  class Empregado {
    nome: string;
    salario: number;
    id: number;
    setor: number;
    constructor(nome: string, salario: number, id: number, setor: number) {
      this.nome = nome;
      this.salario = salario;
      this.id = id;
      this.setor = setor;
    }
  }

  const er = new Empregado("rafael",1,1,1)
  
  class EmpregadoAtendente extends Empregado {
    atendimentosRelizados: number

    constructor(nome: string, salario: number, id: number, setor: number, atendimentosRelizados: number) {
        super(nome, salario, id, setor)
        this.atendimentosRelizados = atendimentosRelizados
    }

    recebeAumento (v: number) {
        super.salario = v
    }
  
    realizaAtendimento () {
      return "Atendimento realizado"
    }
  }

  class EmpregadoFinanceiro extends Empregado {
    constructor(nome: string, salario: number, id: number, setor: number) {
        super(nome, salario, id, setor)
    }
  
    acessarContas () {
      return ["conta1", "conta2", "conta3"]
    }
  }
  
  class EmpregadoBalconista extends Empregado {
    constructor(nome: string, salario: number, id: number, setor: number) {
        super(nome, salario, id, setor)
    }
    
      acessarProdutos () {
        return ["produto1", "produto2", "produto3"]
      }
    }
  

    class Animal {
        nome: string
        constructor(nomeDoAnimal: string) {
            this.nome = nomeDoAnimal
        }

        fala () {
            console.log(this.nome + " falou")
        }
    }

    class Cachorro extends Animal {
        raca: string
        constructor(nomeDoAnimal: string, racaDoCachorro: string) {
            super(nomeDoAnimal)
            this.raca = racaDoCachorro
        }

        anda () {
            console.log(this.nome + " andou")
        }
    }

    const ca1 = new Cachorro("Rudolf", "labrador")

    ca1.fala()
