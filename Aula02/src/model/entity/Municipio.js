export default class Municipio{

    constructor(nome,arrecadacao) {
        //mesma coisa que this.nome = nome
        Object.assign(this,{nome, arrecadacao});
    }
}