// ARRAY
// let arrNome = [];
// OBJETO
// let arrObj = {};

/*
let firstName = "Murilo";
let lastName = "Flesch";
let age = 35;
let canDrive = true;
let favoritesMovies = ["see", "Matrix"]*/

let person = {
  firstName: "Murilo",
  lastName: "Flesch",
  age: 35,
  canDrive: true,
  favoritesMovies: ["see", "Matrix"],
  adress: {
    street: "Cristovam Colombo",
    number: 555,
  },
};

// LENDO OBJETOS
// console.log("item: ", person.adress.street)

// console.log(person.firstName)
// ou com notação de colchetes:
// console.log("item: ", person['firstName'])

// leitura de um array de objeto:
// console.log(`Filme favorito\n ${person.favoritesMovies[1]}`);


//JSON vs OBJETO JAVASCRIPT
/* json
    - sem funções
    - sem comentários
    - propriedade e string com aspas duplas
*/

// ATUALIZANDO OBJETOS

// person.firstName = "Eduardo";
// ou
// person["firstName"] = "Eduardo";
// console.log(person)

// DELETANDO PROPRIEDADE DE OBJETOS
// delete person.canDrive;
// console.log(person)

// ITERANDO ITENS DE UM OBJETO
for (let key in person) {
  console.log("key in objeto: ", person[key]);
}
  if (key == "firstName") {
    break;
  }


// COMPARACAO OF E IN COM ARRAY
let pessoa = ["Murilo", "Flesch", 35];

for (let key of pessoa) {
  console.log("key of: ", key);
}
for (let key in pessoa) {
  console.log("key in: ", pessoa[2]);
}
