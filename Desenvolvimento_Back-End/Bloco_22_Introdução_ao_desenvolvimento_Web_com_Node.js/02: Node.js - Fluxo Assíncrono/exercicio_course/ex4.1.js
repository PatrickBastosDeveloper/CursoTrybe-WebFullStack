/* 1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome.Por exemplo: 1 - Homer Simpson.; */

const fs = require( 'fs' ).promises; //Importar o módulo fs/promises

function readAll(){ // realizar a leitura do arquivo dentro da função
  fs.readFile( './simpsons.json', 'utf-8' )
  .then((fileContent) => { //Convertendo o conteúdo do arquivo de JSON para um Array utilizando `JSON.parse`
    const simpsons = JSON.parse( fileContent );
    // console.log(simpsons)
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`);// Mapear cada objeto do Array para uma string no formato correto
    strings.forEach((string) => console.log(string)); // Exibir as strings na tela
});
}

// Extra: com `async/await` a função de cima ficaria assim:
// async function readAll() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

//   strings.forEach((string) => console.log(string));
// }

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
function main() {
  readAll();
}

main();