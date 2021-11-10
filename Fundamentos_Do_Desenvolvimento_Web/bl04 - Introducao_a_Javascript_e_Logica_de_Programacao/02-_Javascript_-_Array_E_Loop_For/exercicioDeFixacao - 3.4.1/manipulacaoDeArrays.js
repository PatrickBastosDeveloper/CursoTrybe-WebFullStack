// Exemplos: 
// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList.indexOf('Reunião'); //indexOf() , usado para procurar o índice de um item no Array . 
// console.log(indexOfTask);


// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);

// Como podemos observar, é possível acessar os arrays pelo seu índice. 
// O fato curioso é que a primeira posição do array é representada pelo número 0 . 
// Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a 
// quantidade de seus elementos utilizando o .length e subtrair 1 . 


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da Trybe');  // adiciona uma tarefa ao final da lista.
// console.log(tasksList);//Repare que o método .push() adiciona um novo item no final do array. 


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.unshift('Fazer exercícios da Trybe');  
// console.log(tasksList); 
// adiciona uma tarefa no início da lista.
//Se precisarmos adicionar no início, podemos usar o .unshift()*/

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.pop();  // O método .pop() nos permite remover o último item do array.
// console.log(tasksList);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.shift();  // O método .shift() nos permite remover o primeiro item do array.
// console.log(tasksList);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.splice(1)

console.log(tasksList)
//O método .splice() nos permite remover um item expecífico do array.







