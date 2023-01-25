export class Cliente {
    nome;
    _RG;
    _CPF;
    cidade;
    estado;

    get RG() {
        return this._RG;
    };

    get CPF() {
        return this._CPF
    };

    constructor(nome, RG, CPF, cidade, estado) {
        this.nome = nome;
        this._RG = RG;
        this._CPF = CPF;
        this.cidade = cidade;
        this.estado = estado;
    };
};