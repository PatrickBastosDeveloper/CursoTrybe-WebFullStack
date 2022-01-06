// o operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, como um array, em um novo objeto. Dessa forma, apenas copiamos as informações do array original e colamos em outro lugar. 

const carros = ['gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = [...carros, ...motos];
// O que é feito por debaixo dos panos com o spread é:
// [array[0], array[1], array[3], array2[0], array2[1], array2[2]]

console.log(veiculos);

// outras possibilidades: 
const veiculos2 = [...motos, ...carros];

console.log(veiculos2);

const veiculos3 = ['F40', ...motos, 'Uno', ...carros];

console.log(veiculos3);

// Utilizando spread com objetos:
const conhecimentosTrybe = {
    softSkills: true,
    hardSkills: true,
    trabalho: true,
};

const pessoa = {
    nome: 'Nádia',
    idade: '28',
    cidade: 'BH',
};

const pessoaTryber = {
    ...pessoa,
    ...conhecimentosTrybe,
    esporte: 'corrida',
};

console.log(pessoaTryber);

// Mais um exemplo com objetos abaixo:

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */

// Outros exempos:

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

// O spread é muito útil também quando precisamos combinar arrays em uma única estrutura, como ilustrado abaixo:

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros:

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min . 

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800 (Encontra o maior número do array)
console.log(Math.min(...randomNumbers)); // 5 (Encontra o menor número do array)


// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Laranja', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Manga', 'Melancia', 'Pera'];

const fruitSalad = (fruit, additional) => {
  const sumFruts = [...fruit, ...additional];
  return sumFruts;
};

console.log(fruitSalad(specialFruit, additionalItens));
