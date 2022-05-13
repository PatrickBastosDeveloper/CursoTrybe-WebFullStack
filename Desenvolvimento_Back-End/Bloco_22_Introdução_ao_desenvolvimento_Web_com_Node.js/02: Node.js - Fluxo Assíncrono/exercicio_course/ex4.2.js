/* 2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado.Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".; */
const fs = require( 'fs' ).promises;

async function getSimpsonById(id){ // Criar a função 
  const fileContent = await fs.readFile( './simpsons.json', 'utf-8' );
  const simpsons = JSON.parse( fileContent ); // e realizar a leitura do arquivo e a conversão do JSON em objeto.
  // Realizar a busca pelo Simpson desejado:
  const choseSimpson = simpsons.find( simpson => Number( simpson.id ) === id );
  if(!choseSimpson){// Caso não encontrar, disparar um erro:
    throw new Error('id não encontrado');
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
       Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
       tendo como motivo o que passarmos para o `throw`.
       Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
        */
      }
  return choseSimpson;
}

/* Para receber o retorno dessa função assíncrona, ou seja, a resolução dessa promise, precisamos usar ou `await` ou `.then` ao executá-la.*/
// Assim:

// Opção com await: 
async function main(){
  const simpson = await getSimpsonById( 1 );
  console.log(simpson);
}

// Opção com .then:
// function main(){
//   getSimpsonById( 2 )
//     .then(simpson => console.log(simpson));
// }

main();