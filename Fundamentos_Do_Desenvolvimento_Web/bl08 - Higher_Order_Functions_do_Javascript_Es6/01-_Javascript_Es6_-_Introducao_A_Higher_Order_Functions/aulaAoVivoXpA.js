// Higher Order Functions (HOFs)
// Funções de ordem superior são funções que retornam uma função ou que recebem uma função como parâmetro.

const { table } = require("console");

// const { log } = require("console");

// Um exemplo de função como parâmetro de outra função é no uso do addEventListner, assim como as funçõe do jest que também são funções de ordem superior porque também recebem uma função como parâmetro.

// Tipos de parâmetros: string, number, object, bool, array, undefined, function.

// callback function

// Quando passamos uma função como parâmetro de outra função chamamos de callback.

//From MDN: "Uma função callback é uma função passada a outra função como parâmentro, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação."

// Objetivo: Deixar nítido que função é um tipo como outro qualquer:

// const pi = 3.14159265359;
// console.log(pi.toFixed(2));

// Qunado atribuimos um valor ao identificador o vscode já identifica o tipo do valor (nesse caso é um number) e quando colocamos o ponto na frente do identificador e damos um ctrl + espaço o vscode lista funções daquele tipo. No caso acima foi usado o toFixed que permite decidirmos quantas casas decimais iremos imprimir.

// const greetings = "Hello, HOF!";
// console.log(greetings.split(" "));

//Assim como number, string também possui funções, como no exemplo acima que temos o uso do split que tem a função de retornar as palavras atribuidas ao identificador em um array e de forma separada.

// const isValid = true;
// console.log(isValid.valueOf());

// Boolean serve para falar se é verdadeiro ou falso e normalmente é utilizado com condicionais como if.

// const person = {
//   name: "Alcione",
//   age: 39,
// };
// console.log(Object.keys(person));

// No exemplo acima estamos atribuindo os objetos no identificador person e, embora objetos não tenham funções próprias eles tem funções acessíveis por meio do objeto global, o Object. Nesse caso usamos o keys que retorna todas as chaves do objeto.

// const names = ["José", "Madalena", "Epaminondas"];
// names.pop();
// console.log(names);
// names.push("Hugo");
// console.log(names);

// Acima temos um exemplo dos arrays, que também são objetos mas que são objetos especializados em guardar conjuntos de dados. Os arrays possuem várias funções (push, map, forEach, etc.) e no exemplo usamos o pop(), que remove o último elemento de um array, e o push(), que coloca mais um elemento ao final do array.

// const sayHello = () => console.log("Hello, Hof's!");
// console.log(typeof sayHello);

// sayHello.call(); 
// ou, mais comunmente sayHello();

// E no exemplo acima foi atribuida uma função ao identificador e impresso seu tipo com o typeof para comprovar que função nada mais é que um objeto atribuído a um identificador assim como number foi atribuido ao pi no primeiro exemplo acima.
// from MDN:  "O construtor Function cria um novo objeto Function."
// Inclusíve funções tem métodos, como o call() usado acima que invoca uma função com um dado valor this.

// Retornando o produto da multiplicação entre dois números.

// Função é uma maneira de encapsular um algoritimo, nós não conhecemos o que acontece lá dentro. O que sabemos é o que ela recebe como parâmetro eo que ela retorna.

// Objetivo 1: Entender o que é uma HOF.
// Objetivo 2: Entender porque uma HOF é útil.
// Objetivo 3: Entender como fazer uma HOF.

// Sem HOF:

// let sociedade = [
//   "Chaves",
//   "Chiquinha",
//   "Kiko",
//   "Seu Madruga",
//   "Bruxa do 71",
//   "Seu Barriga",
//   "Prof.Girafales",
//   "Popis",
//   "Godines",
// ];

// function eliminarPessoasComecandoCom(pessoas, primeiraLetra) {
//   const acumulador = [];
//   for (let index = 0; index < pessoas.length; index += 1) {
//     const nomeDaPessoa = pessoas[index];
//     //   console.log(nomeDaPessoa[0]);
//     if (nomeDaPessoa[0] != primeiraLetra) {
//       acumulador.push(nomeDaPessoa);
//     }
//   }
//   return acumulador;
// }

// function eliminarPessoasComecandoComNomeMaiorQue(pessoas, maxLetras) {
//   const acumulador = [];
//   for (let index = 0; index < pessoas.length; index += 1) {
//     const nomeDaPessoa = pessoas[index];
//     //   console.log(nomeDaPessoa[0]);
//     if (nomeDaPessoa.length <= maxLetras) {
//       acumulador.push(nomeDaPessoa);
//     }
//   }
//   return acumulador;
// }

// console.log("-------------antes de eliminar com S)---------------");
// console.table(sociedade);

// console.log("-------------------depois de eliminar S---------------");
// sociedade = eliminarPessoasComecandoCom(sociedade, "S");
// console.table(sociedade);

// sociedade = eliminarPessoasComecandoCom(sociedade, "C");
// console.log("-------------------depois de eliminar C---------------");
// console.table(sociedade);

// sociedade = eliminarPessoasComecandoCom(sociedade, "P");
// console.log("-------------------depois de eliminar P---------------");
// console.table(sociedade);

// sociedade = eliminarPessoasComecandoComNomeMaiorQue(sociedade, 5);
// console.log("-------------------depois de eliminar pessoas com nome com mais de 5 letras---------------");
// console.table(sociedade);

// Com HOF:

let sociedade = [
    "Chaves",
    "Chiquinha",
    "Kiko",
    "Seu Madruga",
    "Bruxa do 71",
    "Seu Barriga",
    "Prof.Girafales",
    "Popis",
    "Godines",
  ];

function eliminar(pessoas, condicao) {
    const acumulador = [];
    for (let index = 0; index < pessoas.length; index += 1) {
        const nomeDaPessoa = pessoas[index];
        if (condicao(nomeDaPessoa)) {
          acumulador.push(nomeDaPessoa);
        }
      }
      return acumulador;
}

function condicaoNaoComecaComS(nome) {
    return nome[0] !== "S";
}

console.log('--------antes de eliminar com S--------');
console.table(sociedade);

sociedade = eliminar(sociedade, condicaoNaoComecaComS);

console.log('-------depois de eliminar com S--------');
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome[0] !== 'C');

console.log('-------depois de eliminar com C---------')
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome[0] !== 'P');

console.log('-------depois de eliminar com P---------')
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome.length <= 5);
console.log("----depois de eliminar pessoas com nome com mais de 5 letras-----");
console.table(sociedade);
