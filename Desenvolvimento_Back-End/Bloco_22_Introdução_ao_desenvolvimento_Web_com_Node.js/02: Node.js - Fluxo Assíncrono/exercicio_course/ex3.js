/* Reescreva o código do exercício anterior para que utilize async/await.
Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async. */

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

async function makeThreeNumbers(){
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  const result = await theNumbers(...randomNumbers )
  .catch (( error ) => console.log( error.message ));
  console.log(result)
}

makeThreeNumbers()