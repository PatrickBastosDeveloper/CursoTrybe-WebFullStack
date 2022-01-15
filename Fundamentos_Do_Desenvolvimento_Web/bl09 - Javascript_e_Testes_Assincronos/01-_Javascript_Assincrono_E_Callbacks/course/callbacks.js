// De forma resumida, callback é uma função passada como parâmetro para outra função . Sem perceber, você viu um exemplo de função callback quando chamamos a função setTimeout . Esta função recebe dois parâmetros, o primeiro é a função callback que passamos através de uma arrow function , e o segundo é o tempo (em milissegundos) que o interpretador irá esperar para executar a função. Observe a estrutura dela:

// setTimeout(parametro1, parametro2);

// O primeiro parâmetro é uma callback sem nome: () => {} . O segundo parâmetro será o tempo de espera: 2000 (2000 milissegundos ou 2 segundos, por exemplo).
// setTimeout( () => { }, 2000 );

// Agora veremos um exemplo prático de como podemos utilizar funções callback :

const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

// Neste trecho da implementação, podemos notar que foi adicionada a função despesaMensal , que recebe três parâmetros: renda , despesas , e callback . Acredito que você deva estar pensando: "O que este parâmetro callback está fazendo nesta função?".
// Como vimos anteriormente, callback é, basicamente, uma função passada por parâmetro para outra função. Neste exemplo, o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos despesas e retornará este valor para a constante despesaTotal .

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};

// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

despesaMensal( renda, despesas, somaDespesas );

// Em síntese o que fizemos foi:
// 1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// 2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback .
// 3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um valor de gastos total.
// 4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.

Exemplos:

const resultadoFinal = ( resultado ) => {
  console.log( resultado );
}

const funcSoma = ( num1, num2 ) => num1 + num2;

let resultadoSoma = funcSoma( 10, 8 );
resultadoFinal( resultadoSoma );

// exemplo 1 com callback:

const resultadoFinal = (resultado) => {
  console.log( resultado );
}

const funcSoma = ( num1, num2 ) => {
  let soma = num1 + num2;
  resultadoFinal( soma );
}

funcSoma( 10, 8 );

// exemplo 2 com callback

const resultadoFinal = (resultado) => {
  console.log( resultado );
}

const funcSoma = ( num1, num2 ) => {
  let soma = num1 + num2;
  resultadoFinal( soma );
}

funcSoma( 10, 8 );

// exemplo 3 com callback

const resultadoFinal = (resultado) => {
  console.log( resultado );
}

const funcSoma = ( num1, num2, callback ) => {
  let soma = num1 + num2;
  callback( soma );
}

funcSoma( 10, 8, resultadoFinal );

// mais exemplos:
// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
getUser(userFullName);


// setTimeout() executa após um determinado tempo um comando.

console.log( 'antes do setTimeout' );

setTimeout( function ()
{
  console.log( 'Testando o setTimeout' );
}, 2000 );


console.log( 'depois do setTimeout' )

// clearTimeout() Serve para parar o setTimeout

let x = 0;

const myTimer = setTimeout( () => console.log( 'O x é zero' ), 1500 );

x = 5

if ( x > 0 )
{
  clearTimeout( myTimer );
  console.log( 'o x passou de zero' );
}

// setInterval() repete um determinado comando repetidas vezes 

let myInterval = setInterval( () => console.log( 'imprimindo interval' ), 500 );

// setTimeout() Serve para parar o setInterval

setTimeout( () => { 
  console.log( 'Não precisamos mais repetir!' );
  clearInterval( myInterval );
},1500 );