import fs from 'fs';
import readline from 'readline-sync';
//const readline = require('readline-sync');
//const fs = require('fs');

//const imc = require('./imc');
//import imc from './imc.js';
//import {soma, multiplicacao} from './funcoes_math.js';
import {soma, multiplicacao, imc} from './funcoes/index.js';

const askName = () => {
    return readline.question('Qual é seu nome??');
}

const askHeight = () => {
    return readline.questionFloat('Qual é sua altura?');
}

const askWeight = () => {
    return readline.questionFloat('Qual é seu peso?');
}

const name = askName();
const height = askHeight();
const weight = askWeight();

const result = imc(weight, height);

fs.appendFileSync('imc.txt', `O IMC de ${name} é: ${result}`);

const data = fs.readFileSync('./imc.txt', {encoding: 'utf-8'});

console.log(data);
//console.log(`O IMC de ${name} é: ${result}`);

console.log(soma(2,2));
console.log(multiplicacao(2,2));