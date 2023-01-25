import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    conta;
    instituicaoDePagamento;
    _saldoEmConta = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        };
    };

    get cliente() {
        return this._cliente;
    };

    get saldoEmConta() {
        return this._saldoEmConta;
    };

    constructor(agencia, cliente, conta, instituicaoDePagamento) {
        this.agencia = agencia;
        this.cliente = cliente;
        this.conta = conta;
        this.instituicaoDePagamento = instituicaoDePagamento;
        ContaCorrente.numeroDeContas += 1;
    };

    efetuarSaque(valor) {
        if (this._saldoEmConta >= valor) {
            this._saldoEmConta -= valor;
            return valor;
        };
    };

    efetuarDeposito(valor) {
        if (valor <= 0) {
            return;
        };

        this._saldoEmConta += valor;
    };

    efetuarTransferencia(valor, conta) {
        const valorSacado = this.efetuarSaque(valor);
        conta.efetuarDeposito(valorSacado);
    };
};