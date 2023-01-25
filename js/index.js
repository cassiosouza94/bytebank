import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Ricardo Alves', '11.513.725-7', '863878710/34', 'Osasco', 'SP');
const cliente2 = new Cliente('Marinalva Oliveira', '30.970.549-6', '378345950/83', 'Belo Horizonte', 'MG');

const contaCorrenteCliente1 = new ContaCorrente('0001', cliente1, '4363533-9', 'Banco 0260.Nu Pagamentos S.A.');
const contaCorrenteCliente2 = new ContaCorrente('4157', cliente2, '220901400045677-9', 'Caixa Econômica Federal');

console.log(ContaCorrente.numeroDeContas);