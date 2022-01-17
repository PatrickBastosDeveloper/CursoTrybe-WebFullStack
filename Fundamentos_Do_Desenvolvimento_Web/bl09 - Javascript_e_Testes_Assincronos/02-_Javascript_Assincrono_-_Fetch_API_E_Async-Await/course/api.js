// Application Programming Interface (API)

const { measureMemory } = require( 'vm' );
const { scriptName } = require( 'yargs' );

// Em resumo, uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas. Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.

// Por que precisamos de APIs?
// Imagine a seguinte situação: você está trabalhando em um blog e gostaria de exibir para os visitantes os tweets que fazem referência a ele.
// Uma estratégia seria contatar o Twitter e solicitar os tweets por e-mail. Entretanto, esse processo seria extremamente manual e o número de solicitações muito alto. Não teríamos também nossos dados atualizados em tempo real.
// Por esse motivo, o Twitter cria uma forma de fazermos consultas a esses dados, através de uma API. Ela vai controlar quais dados podemos requisitar, preparar nosso pedido no servidor e nos enviar uma resposta.

// Como uma API se diferencia de um back-end padrão de um site?
// Toda API é um back-end, mas nem todo back-end é uma API.
// Um back-end padrão de um site retorna templates (um arquivo HTML pronto, por exemplo) para o front-end de uma única aplicação, através de rotas definidas. Por exemplo, quando você acessa uma página da nossa plataforma, está fazendo um request ao servidor, que te retorna um template como response .
// As APIs também possuem rotas de acesso que permitem a comunicação com o servidor, mas não precisam retornar templates. Geralmente, retornam dados no formato JSON .

// O que é JSON e por que o usamos?
// JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos Javascript:

{
  "trybers": [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}

// JSON está sempre presente em aplicações web modernas, pois é simples, interpretável e ainda funciona muito bem em aplicações JavaScript. Além disso, é compatível com diversas outras linguagens, que conseguem interpretá-lo e gerar códigos no formato

// Apesar do nome, ele não é um objeto JavaScript, apenas é estruturado de forma que faz uso de chaves e valores. Então, por não ser um objeto nativo do JavaScript, precisamos traduzir ele para que fique a par da linguagem que estamos usando. Para isso existe a função JSON.parse() , assim como existe a função JSON.stringify() que transforma uma estrutura JavaScript em string.

// Vamos ver um breve exemplo a respeito disso nos arquivos index.html e script.js;

// Como utilizar APIs na minha aplicação?
// APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
// Encontre uma API pública, que seja bem documentada e mantida;
// Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
// Entenda o formato dos dados disponíveis;
// Faça requests e receba responses da API com os dados que você deseja receber.

// Revisão

// API ou Aplication Protocol interface, são pontes de acesso a dados que trazem dados. No caso da web pode ser trazido no formato JSON (JavaScript Object Notation) ou XML para manipular informações compartilhadas voluntariamente por outras instituições. 

// APIs não são banco de dados. 
// Toda API é um back-end, mas nem todo back-end é uma API.

// O formato JSON facilita o entendimento e a manipulação dos dados de uma API. 
// Embora tenha o nome que insinua ser um objeto javascript, na verdade o JASON tem apenas o formato de objeto pois trabalha com chave e valor. 
