// assincronicidade;
// // Normalmente, o código de um programa é executado de forma direta, com uma coisa acontecendo por vez. Se uma função depende do resultado de outra função, ela tem que esperar o retorno do resultado, e até que isso aconteça, o programa inteiro praticamente para de funcionar da perspectiva do usuário.
// Essa é uma situação frustrante, e não faz bom uso do poder de processamento do computador — especialmente em uma era em que computadores tem múltiplos núcleos de processamento disponíveis. Não há sentido em ficar esperando por algo quando você pode deixar outra tarefa ser executada em um núcleo de processador diferente e deixar que ele te avise quando terminar. Isso te permite fazer mais coisas por enquanto, o que é a base da programação assincrona. Depende do ambiente de programação que você está usando (navegadores da Web, no caso de desenvolvimento da Web) para fornecer APIs que permitem executar essas tarefas de forma assíncrona.

// Bloqueio de código
// Técnicas async (assíncronas) são muito úteis, principalmente na programação web. Quando um aplicativo web é executado em um navegador e executa um pedaço de código rigoroso sem retornar o controle para o navegador, ele pode parecer que travou. Isso é chamado de blocking; o navegador está bloqueado de continuar a manusear a entrada do usuário e de realizar outras tarefas até que o aplicativo web retorne o controle do processador.

setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log( '3 - Fixar roda no carro' ); // 3 - Fixar roda no carro

// Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1 , 2 e 3 , mesmo assim o retorno das chamadas só ocorre ao final. Isto acontece pois utilizamos a função setTimeout . É muito comum que esta função seja utilizada para simular comportamentos assíncronos. Na prática vivenciaremos situações em que nossa aplicação depende de uma informação externa, como por exemplo, solicitar uma informação a um banco de dados. É aí que o conceito de assincronicidade entra a nosso favor para que nossa aplicação não perca eficiência.



// Agora, vamos ver um pouco da prática realizando este exercício de fixação. Copie o código para ser executado na sua máquina:
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber( numbers, 2 );
pushNumber( numbers, 3 );




const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log( numbers ); // O retorno é [2, 3]

// Por que o primeiro código retorna o array [1, 2, 3] enquanto o segundo retorna o array [2, 3] ? Isso ocorre por causa da função setTimeout . Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1) . Como o console.log é uma função síncrona, ele é executado antes do setTimeout terminar.
// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:


const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout( () => console.log( numbers ), 3000 );

// Observe que, além de adicionar o setTimeout , o array [1, 2, 3] foi modificado para [2, 3, 1] . Isso se dá, pois, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2 , depois o 3 , e após os 3 segundos do setTimeout , ele recebe o 1 .

