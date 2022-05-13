// 1.Crie uma função que receba três parâmetros e retorna uma Promise.
//   1- Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".;
//   2- Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
//   3- Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
//   4- Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function theNumbers(numb1, numb2, numb3){
  return new Promise((resolve, reject) => {
  if ( typeof numb1 !== 'number' || typeof numb2 !== 'number' || typeof numb3 !== 'number' ){
    return reject( new Error( "Informe apenas números" ) );
  }
    const resultado = ( numb1 + numb2 ) * numb3;

  if ( resultado < 50 ){
      return reject( new Error( 'Valor muito baixo' ) );
    }
    resolve( resultado );
  });
}

theNumbers(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch (( error ) => console.log( error.message ));

theNumbers( 1, 1, 'a' )
  .then( ( resolve ) => console.log( resolve ))
  .catch ( ( error ) => console.log( error.message ));

theNumbers( 1, 1, 1 )
  .then( ( resolve ) => console.log( resolve ) )
  .catch( ( error ) => console.log( error.message ) );



