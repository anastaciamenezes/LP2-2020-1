import fs from 'fs';
import path from 'path';
import excelToJson from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';

export default class ArrecadacaoDAO {

    carregarArrecadacoesDosMunicipios(){
        let municipios = [];

        /**
         * Aponta para o arquivo da planilha de dados
         */
        let caminhoArquivo = path.resolve(__dirname,'../../data/dados.xls');

        let dados = excelToJson({
            source: fs.readFileSync(caminhoArquivo),
            range: 'A4:P185'
        });

        /**
         * Plan1 é um vetor que todos os dados das planilhas - ver no saida.txt
         * Cada elemento do vetor está entre []
         */
        dados.Plan1.forEach(elemento => {
            let nome = elemento.A;
            /**
             * Object.value devolve todos os valores
             * das propiedades existentes dentro de um objeto
             */
            let valores = Object.values(elemento);
            let arrecadacoes = valores.slice(1, valores.length);
            let municipio = new Municipio(nome, arrecadacoes);
            municipios.push(municipio);
        });

        return municipios;
    }
}