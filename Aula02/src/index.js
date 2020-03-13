import ArrecadacaoDAO from './model/dao/ArrecadacaoDAO';

let dao = new ArrecadacaoDAO();
let municipio = dao.carregarArrecadacoesDosMunicipios();
console.log(municipios);