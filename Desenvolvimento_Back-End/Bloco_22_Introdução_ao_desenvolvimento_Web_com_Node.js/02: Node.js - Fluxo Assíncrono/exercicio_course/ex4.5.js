// 5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.;

const fs = require( 'fs' ).promises; // Importa o módulo fs/promises.

async function addNelsonToFamily(){
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8'); // Leitura do arquivo.
  
  const simpsonsFamily = JSON.parse( fileContent ); // Transformando o conteúdo do arquivo em um array.
  simpsonsFamily.push({id: '8', name:'Nelson Muntz'}); // Adicionando uma nova pessoa ao array.
  // console.log(simpsonsFamily);
  // Escrevendo no arquivo e convertendo com o JSON.stringify para o formato JSON.
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

addNelsonToFamily()
