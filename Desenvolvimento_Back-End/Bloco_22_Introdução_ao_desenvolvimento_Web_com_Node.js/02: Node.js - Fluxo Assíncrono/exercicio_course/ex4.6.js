// 6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const fs = require('fs').promises; // Importando o módulo fs/promise.

function replaceNelson(){
  return fs.readFile( './simpsonsFamily.json', 'utf-8' ) // Interpretamos o conteúdo como JSON
    .then( ( fileContent ) => {
      const simpsons = JSON.parse(fileContent);
      // Filtramos o array para remover o personagem Nelson
      const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');
      // Criamos um novo Array contendo a personagem Maggie
      const simpsonsWithMaggie = simpsonsWithoutNelson.concat([{id:'15', name:'Maggie Simpson'}]);
      // com spread seria assim: 
      // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
    // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  })
}

replaceNelson();

// Com a sintaxe `async/await`: 

// async function replaceNelson() {
//   const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);

//   // Filtramos o array para remover o personagem Nelson
//   const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

//   // Criamos um novo Array contendo a personagem Maggie
//   const simpsonsWithMaggie = simpsonsWithoutNelson
//     .concat([{ id: '15', name: 'Maggie Simpson' }]);
//   // com spread seria assim: 
//   // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

//   // Escrevemos o novo array no arquivo e retornamos a promise de escrita
//   return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
// }
