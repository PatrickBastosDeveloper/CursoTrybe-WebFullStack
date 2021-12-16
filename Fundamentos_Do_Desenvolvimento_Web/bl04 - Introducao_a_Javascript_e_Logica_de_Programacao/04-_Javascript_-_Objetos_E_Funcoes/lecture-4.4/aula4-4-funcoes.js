// FUNÇÃO SIMPLES
// let valor1 = 1000;

const { arrowFunctionExpression } = require("@babel/types");

// function teste( param ){
//     console.log("oi");
// }

let arrSalario = [1000, 500, 2000];

function calculaIPRF(salario, base) {
  let resultado = (salario / base) * salario;
  return resultado;
}

// let recebeCalculo1 = calculaIPRF(arrSalario[0] , 3 )
// let recebeCalculo2 = calculaIPRF(arrSalario[1],5)
// let recebeCalculo3 = calculaIPRF(arrSalario[2],8)

// ou com for:

// for (i = 0; i < 3; i++) {
//   console.log(calculaIPRF(arrSalario[i], 8));
// }

// console.log('calculo IPRF:',  recebeCalculo1);
// console.log('calculo IPRF:',  recebeCalculo2);
// console.log('calculo IPRF:',  recebeCalculo2);

// FUNCAO C/ PARAMETRO

// FUNCAO C/ PARAMETRO E RETORNO

// EXERCÍCIO LOTERIA
//DOC: https://www.w3schools.com/js/js_math.asp

// EXERCÍCIO LOTERIA REFATORADO C/ FUNÇÃO

// Aula do Guanabara https://www.youtube.com/watch?v=mc3TKp2XzhI

// function parImp(number) {
//   if (number % 2 === 0) {
//     return "par";
//   }else{
//       return 'impar'
//   }
// }

// console.log(parImp());

const parImp = (numero) => {
    let resultado = numero % 2 === 0 ? 'par' : 'impar';
    return resultado;
}

console.log(parImp(4));

// const parImp = (numero) => numero % 2 === 0 ? 'par' : 'impar';

// console.log(parImp(4));


// Atribuindo mais de um parâmetro: 
// É possível predefinir um valor aos parâmetros caso queira ter um número padão como opção. 
// function soma (n1 = 0, n2 = 0){
//     let total = n1 + n2;
//     return total;
// };

// console.log(soma());

// Com arrow function:

// const soma = (n1 = 0, n2 = 0) => {
//     let total = n1 + n2;
//     return total;
// };

// console.log(soma());


// const soma = (n1 = 0, n2 = 0) => n1 + n2;


// function divisivel (resultado){
// if(resultado % 2 === 0){
//     return 'par'
// }else{
//     return 'impar';
// };
// };

// console.log(soma(2 , 2));

// console.log(divisivel());

