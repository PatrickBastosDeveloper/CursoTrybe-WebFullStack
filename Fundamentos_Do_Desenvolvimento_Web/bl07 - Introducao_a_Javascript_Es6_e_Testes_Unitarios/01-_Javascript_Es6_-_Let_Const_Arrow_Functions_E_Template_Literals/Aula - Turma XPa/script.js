const button = document.getElementById('button');


//Primeira forma;  Não tá funcionando????????

// button.addEventListener('click', alerta);
// function alerta(){
//     alert('Pegadinha do malandro! ié ié!!');    
// }
// alerta()


// Segunda forma

// button.addEventListener('click', function () {
//     alert('Pegadinha do malandro! ié ié!!');
// });


//Terceira forma;

// button.addEventListener('click', () => {
//     alert('Pegadinha do malandro! ié ié!!');
// });

//Quarta forma;

// button.addEventListener('click', () => alert('Pegadinha do malandro! ié ié!!'));


// //Atribuindo uma arrow function a um identificador (let ou const, mas normalmente é com const):

// // const soma = (num1, num2) => {
// //     return num1 + num2;
// // }
// // console.log(soma(2, 8));

// // Ou:

// const soma = (num1, num2) => num1 + num2;
// //console.log(soma(2, 8));
// const result = soma(2, 8);
// console.log(result)


//Como acessar uma variável fora do escopo:

// function saudation(name){
//     let message; //Declarando a variável no escopo da função, antes de usá-la.
//     if(name.includes('xp')){
//          message = `Olá ${name}! Vamos pra cima, sempre!`;
//     }else{
//          message = `Olá ${name}!`;
//     }
//     console.log(message);
// }
// saudation('Turma XP, Tribo B');


//Utilizando uma variável global dentro da função sem perdê-la.

// let variavel = 'ola';

// function saudacao(){
//     let ok = 'tudo bem!'

//     console.log(`variavel ${ok}`);
// }

// saudacao()

// console.log(variavel);


// imutabilidade const: objetos

// const person = {
//     name: 'Oliver',
//     age: 4,
// };

// console.log(person);

//Não é possível reatribuir um novo objeto.
// person = {
//     name: 'Patrick'
//     age: 35,
// };


//Mas o Javascript nos permite alterar as suas propriedades.
// person.beard = true;

// console.log(person);

//Esse raciocínio também se aplica a um array. Podemos alterá-lo 
// indiretamente adicionando/removendo um novo item sem sobrescrever o 
// que já foi declarado:

// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro



// Template strings (concatenação)

// Primeira forma (geralmente o lint reclama desse metodo por causa da extensão de caracteres)

// function sum(number1, number2) {
//     return number1 + number2;
// }
// console.log('O resultado do calculo 2 + 7 = ' + sum(2, 7) + '. Obrigado pela atenção!');

// Retorna uma expressão mais simples que a primeira.

// function sum(number1, number2) {
//     return number1 + number2;
// }
// console.log(`O resultado do calculo 2 + 7 = ${sum(2, 7)}. Obrigado pela atenção!`);

// para quebrar linha com o template strings usa-se o \n
// function sum(number1, number2) {
//     return number1 + number2;
// }
// console.log(`O resultado do calculo 2 + 7 = ${sum(2, 7)}.\nObrigado pela atenção!`);

//ou 

//Dessa forma, onde deve-se identar o espaço de tab desejado antes da frase manualmente. 
// console.log(`O resultado do calculo 2 + 7 = ${sum(2, 7)}.
//     Obrigado pela atenção!`); 



//Ternários: 

let a = 2;
let b = 3;
let c;

// if (a > b) {
//     c = 10;
// }  else {
//     c = 20;
// }

// A mesma expressão abaixo, só que utilizando os ternários (?) se sim e (:) se não

a > b ? c = 10 : c = 20;

console.log(c);

// 






