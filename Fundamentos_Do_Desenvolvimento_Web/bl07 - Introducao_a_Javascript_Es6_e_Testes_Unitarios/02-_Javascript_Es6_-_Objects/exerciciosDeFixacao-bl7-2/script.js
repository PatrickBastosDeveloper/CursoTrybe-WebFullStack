// Parte I - Adicionando novas chaves (keys)

// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   console.log(customer1);

//   customer1.lastName = 'Faria';
//   console.log(customer1);

//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };

//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

// Parte II - Object.keys

// Listando chaves de um objeto com for in. (método obsoleto)

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   for (const property in coolestTvShow) {
//     console.log(property);
//   }

// Listando chaves de um objeto com metodo object.keys (método otimizado)

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   console.log(Object.keys(coolestTvShow));

// Exmplo de object.keys com function.

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };

//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };

//   const listSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for(index in arrayOfSkills){
//       console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
//   };

//   console.log('Estudante 1');
//   listSkills(student1);

//   console.log('Estudante 2');
//   listSkills(student2);

// Objetos: Parte III - Object.values
// O Object.values segue a mesma lógica que o Object.keys , a diferença está em que ele lista os valores de cada chave.

// Listando os valores das chaves de um objeto com for in. (método obsoleto)

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
// }

// Listando os valores das chaves de um objeto com metodo Object.values  (método otimizado)

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   console.log(Object.values(coolestTvShow));

// Exemplo de Object.values com function (comparativo):

// Sem Object.values

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
//   };

//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }

//     return skills;
//   };

//   console.log(listSkillsValuesWithFor(student));

//Com Object.values

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
//   };

//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }

//     return skills;
//   };

//   const listSkillsValuesWithValues = (student) => Object.values(student);

//   console.log(listSkillsValuesWithValues(student));

// Objetos: Parte IV - Object.entries

// Este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto.

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   console.log(Object.entries(coolestTvShow));

// Outro exemplo:

// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

// Para ver essses mesmos valores separadamente:

//   const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };

//   const pairKeyValue = Object.entries(países);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

// Objetos: Parte V - Object.assign
//Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino.

// Sua estrutura é:

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };

//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };

//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };

//   Object.assign(person, info, family)
//   console.log(person)

// Como você pode ver, o método Object.assign adicionou as propriedades de info e de family ao objeto person .

// Outro exemplo:

//  const person = {
//     name: 'Roberto Carlos',
//   };

//   const lastName = {
//     lastName: 'Silva',
//   };

//   const clone = Object.assign(person, lastName);

//   console.log(clone);
//   console.log(person);

//   Como pôde ver acima, o clone é exatamente igual ao objeto person , e se você mudar qualquer propriedade nele,
//   observará que o objeto person também será modificado.


//Throw e Try/Catch

//Nesse exemplo abaixo ao atribuir valores numéricos a value1 e value2 o resultado será a soma de ambos.

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(1, 3));

//No entanto, caso o usuário entre com uma string o programa, evitando a quebra de código, retornará o valor 
// concatenado pois transformará o valor numérico em string. Isso se dá pelo fato do Js ser uma linguagem dinâmica.

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(1, '3'));

// Sendo assim devemos tratar esse possível erro préviamente e abaixo tem um método para isso:

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

// Embora seja uma forma de tratar esse problema, ainda não é o ideal.
// É necessário indicar que houve um erro, mas não só para o usuário e, para isso, utilizamos o método throw:

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

//A palavra reservada throw serve para lançar uma exceção criada por você. No caso, 
//definimos que não seria aceito um parâmetro que não fosse do tipo number , então criamos esse "erro customizado". 
// Já o operador new serve para criar um objeto personalizado ou nativo do JavaScript .
//  palavra Error é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new , 
//você cria uma cópia deste objeto, que será lançada como uma exceção no seu código. 

// Mas o fluxo do código ainda pode ser melhorado.
// Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch . 
// Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.

// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

//Agora sim! Você criou um fluxo para quando nosso código é executado com sucesso, representado pelo bloco try , 
//que tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber , que verifica se 
//os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com 
//o throw , que é capturado pelo catch no fluxo de exceção, através da variável error (aqui podemos usar qualquer nome). 
//Dentro do catch retornamos a chave error.message , uma propriedade do objeto nativo Error que contém a mensagem de erro 
//criada anteriormente.