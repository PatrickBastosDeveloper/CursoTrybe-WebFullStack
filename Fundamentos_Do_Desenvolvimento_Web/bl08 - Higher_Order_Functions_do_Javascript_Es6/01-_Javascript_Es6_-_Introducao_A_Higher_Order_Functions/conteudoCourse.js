// JavaScript ES6 - Introdução a Higher Order Functions

// ------First-Class Functions--------

// -----Atribuir funções à variáveis:-----------
// function sum (number1, number2) {
//     return number1 + number2;
//   }

//   const sumVariable = sum;

//   console.log(sumVariable);
//   //  [Function: sum]

//Quando utilizamos arrow functions , estamos justamente utilizando da capacidade do
//javascript de conseguir armazenar a função dentro de uma variável.

//const sum = (number1, number2) => {
//     return number1 + number2;
// };

// -----Passar funções como argumento para outras funções:-----------

// const sayHello = () => {
//     return ('hello trybers');
//   }

//   const printGreeting = (callback) => {
//       console.log(callback());
//   }

//   printGreeting(sayHello);

// -----Retornar uma função de outra função:-----------

// const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }

//   const initialSum = sumFixAmount(15)
//   console.log(initialSum(5));

// ------Higher Order Functions----------

// As HOFs são funções que usam outras funções em suas operações,
// devendo aceitá-las como parâmetro e/ou retorná-las. Elas nos permitem compactar ações e
// não somente repassar valores.

// const button = document.querySelector('#signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

// -----Estruturando uma HOF---------

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// Construímos essa função para implementar um laço de repetição entre 0 e um número 
// especificado via parâmetro ( number ) e para mostrar no console o valor da variável 
// count de 0 a N ( number ). O console.log é uma função própria do JavaScript , mas veja 
// que fica mais simples caso você precise substituir esta ação para console.table ou console.group .

// ------------------------------------------

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(3, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   });

//   Veja que nosso segundo parâmetro é uma função que recebe o count como argumento, proveniente da
//   execução do nosso action(count) dentro da função repeat . Deste modo, caso o count passe pela condição 
//   estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.

// ----------------------------------------------

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   const isEven = (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   };
  
//   const isOdd = (number) => {
//     if ((number % 2) > 0) {
//       console.log(number, 'is odd');
//     }
//   };
  
//   repeat(3, isEven); // Testa quais números serão pares;
//   repeat(3, isOdd); // Testa quais números serão ímpares;

//   Observe que apenas transportamos e ajustamos a lógica para identificar os números pares e ímpares 
//   em duas novas funções chamadas isEven e isOdd . Após isso, só alteramos o segundo parâmetro ao chamar
//   a função repeat .

// ----------------------------------------------------

// const numberGenerator = () => {
//     return Math.random() * 100;
//   }
  
//   console.log(numberGenerator);


// Veja que ao executar esse código, não recebemos um número aleatório. Isso aconteceu porque na quinta linha 
// do script nós imprimimos apenas a escrita da função, como não realizamos sua execução, ela não seguiu os procedimentos para retornar um número aleatório. 
// Para executarmos a função, teríamos que inserir () na frente do numberGenerator .