/* 4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, 
chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.; */

const fs = require( 'fs' ).promises; //Importar o módulo fs/promises

async function createSimpsonsFamily(){ // Leitura do arquivo dentro da função:
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8'); 
  //Convertendo o conteúdo do arquivo de JSON para um Array utilizando `JSON.parse`:
  const simpons = JSON.parse( fileContent );
  
  const familyIds = [ 1, 2, 3, 4, 5 ];
  const simpsonsFamily = simpons.filter( ( simpson ) => familyIds.includes( Number( simpson.id ) ) );
  // acima foi convertido o ID pra número, já que ele está salvo no JSON como string
  // console.log( simpsonsFamily );
  // Escrever o novo arquivo no disco:
  await fs.writeFile( './simpsonsFamily.json', JSON.stringify( simpsonsFamily ) )
  
  // O método JSON.stringify() converte valores em javascript para uma String  JSON.
}

createSimpsonsFamily()
