// Função é um conjunto de instruções que executa uma tarefa ou calcula um valor.

// function nomeDaFuncao(param1, param2...) {
// let resultado = param1 + param2;
// return resultado;
// };
// nomeDaFuncao(10, 20);

// Os paramentros, representados acima por param1 e param2, serão convertidos em variáveis dentro do corpo da função.

// O par de chaves{} Delimita o corpo da função.

// Caso preciso, é possível declarar variáveis dentro da função, como no caso acima que apresenta a variável let resultado com atribuição do calculo dos parâmetros.

// O return possibilita retorna um valor.

// Para invocar uma função basta atribuir valores aos parâmetros de forma respectiva e caso a função não espere parâmetros para chamá-la basta colocar o nome seguido de parenteses() vazios.  Ex. outraFuncao();

// let statusCarro = "desligado";
// let aceleracao = 0;
// let rotacaoDoVolante = 0;

// function ligarDesligar() {
//   if (statusCarro === "desligado") {
//     statusCarro = "ligado";
//   } else {
//     statusCarro = "desligado";    
//   }
//   return statusCarro;  
// };


// function acelerar(incremento) {
//     aceleracao = aceleracao + incremento;

//     return `Acelerando a ${aceleracao} m/s2`;
// };


// function frear(decremento) {
//     aceleracao = aceleracao - decremento;

//     return `Desacelerando para ${aceleracao} m/s2`; 
// };


// function girarVolante(angulRotacao) {
//     rotacaoDoVolante = angulRotacao;

//     return  `${rotacaoDoVolante} graus`;
// };


// Como foi visto, é possível criar funções que recebem ou não parâmetros. E, para decidir se a sua função precisa ou não deles, você deve pensar em sua lógica.
// Por exemplo, se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.
// Exemplo:

// // Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);


// // Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// Exemplos de funções sem parâmetros:

// Ex1: 

// function bomDia() {
//     return 'Bom dia!';
//   }
  
//   console.log(bomDia()); // Bom dia!

// Ex2:

// let status = 'deslogado';

// function logarDeslogar() {
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
// }

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuário está deslogado

// Exemplo de função com parâmetro:

// // Ex1:
// function logarDeslogar(status) {
  
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
//   return status

// }

// console.log(logarDeslogar('deslogado')); // logado

// console.log(logarDeslogar('logado')); // deslogado

// console.log(`O usuário está ${logarDeslogar()}`); // O usuário está deslogado

// Ex2: 

function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return `${primeiroNum} é maior que ${segundoNum}`;
    } else if (segundoNum > primeiroNum) {
      return `${segundoNum} é maior que ${primeiroNum}`;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais




// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//   car['motor'] = '500cvl',

//   console.table(car);
