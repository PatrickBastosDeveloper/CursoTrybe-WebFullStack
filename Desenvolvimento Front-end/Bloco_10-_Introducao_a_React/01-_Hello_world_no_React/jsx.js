// JSX

// O JSX , ou Javascript Syntax Extension , como o próprio nome sugere, é uma extensão de sintaxe para Javascript. Sua utilização é recomendada pela documentação do React, pois ela demonstra como a interface deverá se comportar, de forma lógica e descritiva.

// Exemplo
 const element = <h1>Hello, world!</h1>;

// ⚠️ Atenção ⚠️
// Os códigos com a sintaxe JSX só funcionam dentro do contexto do React, ou seja, não funcionam em JS puro ou rodando diretamente no console do navegador, por exemplo.
// Você pode brincar com o JSX em exemplos interativos do CodeSandbox que aparecem no conteúdo ou em scripts .js ou .jsx que importam o React em projetos criados pelo comando npx create-react-app .

// A construção de um elemento JSX é bem parecida com um elemento HTML, com pequenas diferenças para que não haja conflito do HTML com o JS. Um exemplo disso é a declaração de uma class no HTML, que é substituída por className no JSX, pois haveria conflito de sintaxe com as classes do JS.

// Incorporando expressões no JSX
// Por ser um código Javascript, o JSX permite que se faça injeções de algoritmos dentro da estrutura HTML. Portanto, é possivel que se aplique diretamente na estrutura códigos que renderizarão outras diversas expressões, por exemplo:


const nome = 'Jorge Maravilha';
const element = <h1>Hello, { nome }</h1>;

// E se aprofundarmos um pouco mais chamando uma função na nossa constante element?

function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, { nomeCompleto( "Jorge", "Maravilha" ) }</h1>;

// Agora, vamos incorporar a nossa constante element na função helloWorld , retornar um código JSX e encapsulá-la em uma div :

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{ element }</div>;

// Lembra que falamos sobre a substituição de class por className em JSX? Podemos também utilizar expressões Javascript para atribuir valor à este atributo.

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;