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

// Void


function sayHi(): void { 
  // console.log('Hi!')
} 

let speech = sayHi(); 
// console.log(speech); //Output: undefined

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

// console.log(sumNumbers({x: 1, y: 2}));

type Adress = {
  street: string;
  neighborhood: string,
  number: number;
}

const myAdress = (info: Adress): number | String => {
  return `Eu moro na ${info.street}, número ${info.number} no bairro ${info.neighborhood}`
}

// console.log(myAdress({street: "Getúlio Vargas", number: 1432, neighborhood: "Quitandinha"}));

// Type union

type StateOfMatter = "liquid" | "solid" | "gaseous";

type identfyDocument = "1234567891011" | 1234567891011;

type SO = "linux" | "Mac" | "Windows";

type vogais = "a" | "e" | "i" | "o" | "u";


// Classes

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

enum HairColor {
  Blond = "blond",
  Black = "black",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;
  hairColor?: HairColor;

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor, hairColor?: HairColor) {
      this.name  = name;
      this.birthDate  = birthDate;
      this.eyeColor  = eyeColor;
      this.hairColor = hairColor;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black, HairColor.Black);
const person3 = new Person("Judi", new Date("10-12-1986"), EyeColor.Blue, HairColor.Blond);

person1.eyeColor = EyeColor.Green; // atribuir após a criação.

// console.log(person1);
// person1.speak()

// console.log(person2);
// person2.walk();

// console.log(person3);
// person3.eat();

interface Hero {
  _nome: string;
  _poder: string;
  _usaCapa: boolean;
  falarFraseInspiradora(frase: string): string;
}

class Hero {
  constructor(nome: string, poder: string, usaCapa: boolean) {
    this._nome = nome;
    this._poder = poder;
    this._usaCapa = usaCapa;
  }
 
  falarFraseInspiradora(frase: string) {
    return `${this._nome} fala: ${frase} Esse heroX ${!this._usaCapa? "não usa" : "Usa capa"}`
  }
}

const hero1 = new Hero("Martin Luther King", "Dar exemplo", false);
const hero2 = new Hero("Nina Simone", "Dar exemplo", false);

// console.log(hero2.falarFraseInspiradora('Não há desculpas para os jovens não saberem quem são ou foram os herois e heroinas.'));

// Exercícios
// Crie uma classe cujo objeto represente um Cachorro.

interface Cachorro {
  _raca: string;
  _pedigri: boolean;
  tipoDeDog(raca: string, pedigri: boolean): string;
}

class Cachorro {
  constructor(raca: string, pedigri: boolean) {
    this._raca = raca;
    this._pedigri = pedigri;
  }

  tipoDeDog = (raca: string, pedigrii: boolean) =>  `Meu doguinho é da raça ${raca} e ${pedigrii? "tem" : "não tem"} pedigri`
}

const cachorroDoPatrick = new Cachorro("Pastor Alemão", false)

// console.log(cachorroDoPatrick.tipoDeDog("Pastor Alemão", false));

// Crie uma classe cujo objeto represente uma Casa.

enum Cores {
  BRANCA = "branca",
  ROSA = "rosa",
  VERDE = "verde",
}

interface Casa {
  _mobiliada: boolean;
  _cor: string;
  descriçãoDaMinhaCasa(mobiliada: boolean, cor: string): string
}

class Casa {
  constructor(mobiliada: boolean, cor: string) {
    this._mobiliada = mobiliada;
    this._cor = cor;
  }

  descriçãoDaMinhaCasa = (mobiliada: boolean, cor: string) => {
    return `Minha casa é ${cor} e ${mobiliada ? "mobilhada" : "não é mobilhada"}`
  }
}

const minhaCasa = new Casa(true, Cores.BRANCA)

// console.log(minhaCasa.descriçãoDaMinhaCasa(true, "branca"));

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  }
}


let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}