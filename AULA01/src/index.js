import ClienteController from './controller/ClienteController'
//const ClienteController = require('./controller/ClienteController');

let nome = 'Anastácia Menezes';
let telefone = '(67) 99999-9999';
let endereco = 'Rua 15 de novembro, 70';
let cpf = '23456789123';

//Instanciar um controlador
let clienteCtrl = new ClienteController();

//Cria um novo objeto de Cliente
let cliente = clienteCtrl
    .criarCliente(nome, endereco, cpf, telefone);

//Exibe o objeto do cliente no Console
console.log(cliente);
