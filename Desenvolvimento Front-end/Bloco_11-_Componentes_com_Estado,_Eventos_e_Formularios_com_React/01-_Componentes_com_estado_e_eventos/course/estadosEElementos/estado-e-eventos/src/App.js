import React from 'react';

class App extends React.Component{
  constructor() { // Quando o React "por trás dos panos" vai renderizar o elemento ele executa uma série de funções, e uma dela é a constructor(). Dessa forma é possível redeclará-la e adionar um comportamento que queremos.
    super()//Mas para isso é necessário escrever a função super() que vai permitir estender o comportamento interno da função contructor seguindo a sequinte ordem: Primeiro ele faz a lógica interna dele, em sequida a que adicionamos para só depois renderizar com a função render().      
    this.handleClick = this.handleClick.bind(this); // O this é o objeto que o React cria e entrega de volta tudo que se refere aquele componente.
    // O bind() foi feito para atender uma limitação existente no javaScript, que não foi feito para ter classes. Ele permite que a função render() consiga enxergar o this quando ele é chamado dentro de um eventListener (linha 20)
    this.state = {
      numeroDeCliques: 0
    }
  }
  handleClick () {//NÃO pode setar o estado fazendo this.state porque no React o estado é atualizado de forma assícrona, dessa forma ele ganaha eficiência.
    this.setState( ( estadoAnterior, _props ) => ( { // A forma correta de fazer a atualização do estado é chamando uma função que funciona de forma assincrona, que nesse caso é a setState.
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1 // Para atualizar o estado usando o estado anterior é necessário usar uma callback como parâmetro da setState. O primeiro parâmetro dessa callback será o estado anterior e o segundo parâmetro (que é obrigatório escrever) serão as props desse estado (como nesse caso não foi necessário usar as props foi usado o underline antes do nome props (_props)).Isso garante que quando passamos essa função calback ela só será executada depois que a atualização anterior a ela for executada. 
    }))
  }
  render ()
  {
    console.log(this);
    return <button onClick={ this.handleClick }>{this.state.numeroDeCliques}</button>
  } // A função declarada no onClick deve utilizar o this para ESPECIFICAR que a função está dentro da classe. Quando escrevemos sem this (onClick={ handleClick }) é como se dissessemos ao JavaScript que a função não está dentro da classe, e casso ela realmente não esteja ela funcionará, do contrário ela não será identificada.  
}

export default App;

// Você pode entender a diferença props vs state da seguinte forma:
// props são uma forma de passar dados de pai para filho.
// state é reservado para dados que seu componente controla.
// O conceito é: state , ou estado do componente, deve servir para guardar valores do Componente que mudam com o uso do mesmo. As props são valores fixos que um componente recebe e não altera.
// Pelos princípios do React você nunca deve tentar alterar o que um componente recebe como props como no exemplo abaixo:

// this.props.name = 'novo nome';

// Em resumo
// Vamos recapitular? Hoje, no conteúdo, começamos a desenvolver as seguintes habilidades:
// Ler o estado de um componente e usá-lo para alterar o que exibimos no browser;
// Inicializar um componente, dando a ele um estado pré-definido;
// Atualizar o estado de um componente.
// Capturar eventos utilizando a sintaxe do React
// Para isso estudamos, no conteúdo, os seguintes pontos:
// Todo componente possui seu próprio estado e tem 100% de controle sobre ele;
// Quando um componente é colocado na tela ele executa uma função chamada constructor , e usando a linha super() podemos sobrescrevê-la para estender seu comportamento;
// O objeto this , acessível a toda classe de componente React , contém tudo o que concerne àquele componente e deve ser vinculado explicitamente às funções criadas dentro da classe, através da sintaxe this.minhaFuncao = this.minhaFuncao.bind(this) no construtor do componente;
// Funções que tratam eventos devem ser vinculadas aos seus respectivos elementos com {this.minhaFuncao} ou {() => this.minhaFuncao('Meu parametro') .
// É possível ler o estado de um componente via this.state , é possível definir um estado inicial no construtor com uma atribuição a this.state e deve-se atualizar tal estado somente com a função this.setState .
// A atualização do estado é assíncrona e, por isso, se você quiser garantir que uma atualização ocorrerá depois da outra, tal atualização deverá ser definida via callback passada à função this.setState , no formato this.setState((estadoAnterior, props) => novoEstado)