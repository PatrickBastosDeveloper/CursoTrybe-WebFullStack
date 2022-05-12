/**
 * Importamos a função `readline-sync`
 */
 const readline = require('readline-sync');

 function calculaArea() {
     //Faz a leitura do lado
     const lado = readline.questionInt('Digite o valor de um dos lados: ');
 
     //Faz a validação do valor do lado do quadrado.
     if (lado < 0)
         throw new Error('Valor inválido');
 
     //Calcula a área lado²
     const area = Math.pow(lado, 2);
     return area;
 }
 
 module.exports = calculaArea;