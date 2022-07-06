"use strict";
// array
let names = ["Mary Joe", "Alan Joe"];
// Tuplas
let fullName = ["Jane", "Doe"];
let person = ["Jane Doe", 35];
let car = ["Ford", "F400", 10];
const printCoord = (pt) => {
    console.log("O valor da cordenada x é: " + pt.x);
    console.log("O valor da cordenada y é: " + pt.y);
};
const sumNumbers = (numb) => {
    return `A soma de ${numb.x} e ${numb.y} é igual a: ${numb.x + numb.y}`;
};
console.log(sumNumbers({ x: 1, y: 2 }));
const myAdress = (info) => {
    return `Eu moro na ${info.street}, número ${info.number} no bairro ${info.neighborhood}`;
};
console.log(myAdress({ street: "Getúlio Vargas", number: 1432, neighborhood: "Quitandinha" }));
