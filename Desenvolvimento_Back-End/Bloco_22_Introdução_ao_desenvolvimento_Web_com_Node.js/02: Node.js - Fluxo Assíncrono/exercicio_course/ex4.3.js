/* 3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.; */

const fs = require( 'fs' ).promises;

async function filterSimpsons(){ // Criar a função
  const fileContent = await fs
    .readFile( './simpsons.json', 'utf-8' );// realizar a leitura do arquivo
  
  const simpsons = JSON.parse( fileContent );// e conversão do parsing do JSON
  
  // Filtrar o array para remover as personagens que devem ser removidas:
  const newArray = simpsons
    .filter( (simpson) => simpson.id !== '10' && simpson.id !== '6' );
  // Escrever no arquivo o novo array filtrado:
  await fs.writeFile( './simpsons.json', JSON.stringify( newArray ) );
}

function main() { // A função main é apenas para termos um ponto de entrada centralizado para o nosso script
  // readAll();
  filterSimpsons();
}

main();