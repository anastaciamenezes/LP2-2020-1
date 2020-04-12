/**
 * Exporta (deixa pública) a classe Cliente com a forma mais moderna (ES6)
 */
export default class Cliente {

    constructor(nome, endereco, cpf, telefone){
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

/**
 * Exporta (deixa pública) a
 * classe Cliente na forma antiga/
 * forma clássica (old school) do JS
 */
//module.exports = Cliente;