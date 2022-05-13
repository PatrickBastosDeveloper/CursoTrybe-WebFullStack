/* 2. Escreva um código para consumir a função construída no exercício anterior.
  
* Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe.Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor( Math.random() * 100 + 1 ).
  
* Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  
* Utilize then e catch para manipular a Promise retornada pela função:
    1 Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
    2 Caso a Promise seja resolvida, escreva na tela o resultado do cálculo. */

function theNumbers(numb1, numb2, numb3){
  return new Promise((resolve, reject) => {
  if ( typeof numb1 !== 'number' || typeof numb2 !== 'number' || typeof numb3 !== 'number' ){
    return reject( new Error( "Informe apenas números" ) );
  }
    const resultado = ( numb1 + numb2 ) * numb3;

  if ( resultado < 2500 ){
      return reject( new Error( 'Valor muito baixo' ) );
    }
    resolve( resultado );
  });
}

function getRandomNumber(){
  return Math.floor(Math.random() * 100 + 1);
}

function makeThreeNumbers(){
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  console.log(randomNumbers);
  theNumbers(...randomNumbers )
    .then((resultado) => console.log(resultado))
    .catch (( error ) => console.log( error.message ));
}

makeThreeNumbers()