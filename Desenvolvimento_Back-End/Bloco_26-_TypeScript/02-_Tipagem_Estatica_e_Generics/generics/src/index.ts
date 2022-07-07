// Sem generics:
// let numberArray = getArraySemGenerics([5, 10, 15, 20]);
// let stringArray = getArraySemGenerics(["Cats", "Dogs", "Birds"]);

function getArraySemGenerics(items: any[]): any[] {
  return new Array().concat(items);
}

// numberArray.push(25);
// stringArray.push("Rabbits");
// numberArray.push("isto não é um número");
// stringArray.push(30);

// console.log(numberArray);
// console.log(stringArray);

// Com generics:
let numberArray = getArrayComGenerics<number>([5, 10, 15, 20]);
let stringArray = getArrayComGenerics<string>(["Cats", "Dogs", "Birds"]);

function getArrayComGenerics<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação

// É possível passar quantas variáveis de tipo forem necessárias.
const indentity = <T, U>(value: T, message: U): T => {
  // console.log(message);
  return value;
}

// let returnNumber = indentity<number, string>(100, "Olá!");
// let returnString = indentity<string, string>("100", "Mundo");
// let returnBoolean = indentity<boolean, string>(true, "Olá mundo!");

// Generics com Interface:
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

const processIdentity = <T, U>(value: T, message: U): T =>{
  // console.log(message);
  return value;
}

// let processor: ProcessIdentity<number, string> = processIdentity;
// let returnNumber = processor(100, "Olá");
// let returnString = processor("Olá", 100);// Type check error: Argument of type "string" is not assignable to parameter of type "number".

// Generics com Classes:
class ProcessIdentity<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}

let processor = new ProcessIdentity<number, string>(100, "Olá!");
processor.getIdentity()
