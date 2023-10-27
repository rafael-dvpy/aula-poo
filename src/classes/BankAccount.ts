export class BankAccount {
    private _nome: string;
    private _id: string;
    private _senha: string;
    private _saldo: number;
  
    constructor(
      nomeFornecido: string,
      idFornecido: string,
      senhaFornecido: string
    ) {
      this._nome = nomeFornecido;
      this._id = idFornecido;
      this._senha = senhaFornecido;
      this._saldo = 0;
    }
  
    saque(v: number) {
      if (this._saldo >= v) {
        return (this._saldo -= v);
      } else {
        return "Erro, sem saldo suficiente";
      }
    }
  
    deposito(v: number) {
      return (this._saldo += v);
    }
  
    public get saldo() : number {
      return this._saldo
    }
}

