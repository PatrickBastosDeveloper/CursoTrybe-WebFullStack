// let height = 1.88; // convertendo centimetros em metros
// let convertHeight = height * 100;
// const weight = 62;
// let imc = weight / (convertHeight ** 2);
// console.log(imc);
const readline = require('readline-sync');

const IMC_MAXIMO_E_MINIMO_POR_SITUACAO = {
  'Abaixo do peso (magreza)': {
    imcMaximo: 18.5,
  },
  'Peso normal': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Acima do peso (sobrepeso)': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade grau I': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade grau II': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade graus III e IV': {
    imcMinimo: 40,
  },
};

function calculaSituacao(imc) {
  const situacoes = Object.keys( IMC_MAXIMO_E_MINIMO_POR_SITUACAO );
  
  const situacaoEncontrada = situacoes
    .find( ( situacao ) => {
    const { imcMaximo, imcMinimo } = IMC_MAXIMO_E_MINIMO_POR_SITUACAO[ situacao ];
    const dentroDoMinimo = imcMinimo ? imc > imcMinimo : true;
    const dentroDoMaximo = imcMaximo ? imc < imcMaximo : true;
    return dentroDoMaximo && dentroDoMinimo;
  });
  return situacaoEncontrada;
};

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionInt( 'Qual sua altura? ' );

const PESO_PADRAO_EM_KG = peso;
const ALTURA_PADRAO_EM_CM = altura;

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}

// A função main é o ponto de partida do nosso programa 
function main() {
  const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);
  const situacao = calculaSituacao(imc);
  console.log( `IMC: ${ imc.toFixed( 2 ) }` );
  console.log(`Situação: ${situacao}`);
}

main();