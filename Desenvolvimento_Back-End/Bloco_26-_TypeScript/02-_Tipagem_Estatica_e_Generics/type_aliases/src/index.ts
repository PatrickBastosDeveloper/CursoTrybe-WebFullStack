// array
let names: string[] = ["Mary Joe", "Alan Joe"];

// Tuplas
let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

// console.log(car);

// Type Aliases

type Point = {
  x: number;
  y: number;
};

const printCoord = (pt: Point)/* : number */ => {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da cordenada y é: " + pt.y);
}

// console.log(printCoord({x: 100, y: 100}));

type Burd = {
  x: string;
}

// function nameBurd(name: Burd)/* : string */ {
//   console.log(`O nome do passáro é: ${name.x}`
// }

// nameBurd({x: "beija-flor"})

type Sum = {
  x: number;
  y: number;
}

const sumNumbers = (numb: Sum): number | string => {
 return  `A soma de ${numb.x} e ${numb.y} é igual a: ${numb.x + numb.y}` 
};

console.log(sumNumbers({x: 1, y: 2}));

type Adress = {
  street: string;
  neighborhood: string,
  number: number;
}

const myAdress = (info: Adress): number | String => {
  return `Eu moro na ${info.street}, número ${info.number} no bairro ${info.neighborhood}`
}

console.log(myAdress({street: "Getúlio Vargas", number: 1432, neighborhood: "Quitandinha"}));

type StateOfMatter = "liquid" | "solid" | "gaseous";

