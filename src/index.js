import * as db from './config/db';
import ProdutoController from './controllers/ProdutoController';
import Produto from './models/Produto';

const produtoCtrl = new ProdutoController();

let criarNovoProduto = async() => {
    db.conectarBD();

    const produto = {
        descricao: "Arroz tipo 1",
        quantidade: "30"
    };
    await produtoCtrl.salvar(produto);
    db.desconectarBD();
}
criarNovoProduto();

let recuperarTodos = async() => {
    db.conectarBD();

    const produtos = await produtoCtrl.recuperarTodos();
    produtos.forEach(produto => console.log(produtos));

    db.desconectarBD();

}
recuperarTodos();

let recuperarProduto = async() => {
    db.conectarBD();

    const produto = await produtoCtrl.recuperarPeloId('5eb396b736eb7c0f90f23b5f');
    console.log(produto);

    db.desconectarBD();
}
recuperarProduto();

let atualizarProduto = async() => {
    db.conectarBD();

    let produto = await produtoCtrl.recuperarPeloId('5eb396b736eb7c0f90f23b5f');
    produto.marca = "Tio João";
    const produtoAtualizado = await produtoCtrl.salvar(produto);
    console.log(produtoAtualizado);

    db.desconectarBD();
}
atualizarProduto();

let recuperarTodosProdutos = async() => {
    db.conectarBD();

    const resposta = await produtoCtrl.remover('5eb369bae284d526e8643ab6');
    console.log(resposta);

    db.desconectarBD();

}
recuperarTodosProdutos();