import React from 'react';

class App extends React.Component{
  constructor() { // Quando o React"por trás dos panos" vai renderizar o elemento ele executa uma série de funções, e uma dela é a constructor(). Dessa forma é possível redeclará-la e adionar um comportamento que nos queremos.
    super()//Mas para isso é necessário escrever a função super() que vai permitir estender o comportamento intern da função contructor seguindo a sequinte orde: Primeiro ele faz a lógica interna dele, em sequida a que adicionamos para só depois renderizar com a função render().      
    this.handleClick = this.handleClick.bind(this); // O this é o objeto que o React cria e entrega de volta tudo que se refere aquele componente.
    // O bind() foi feito para atender uma limitação existente no javaScript, que não foi feito para ter classes. Ele permite que a função render() consiga enxergar o this quando ele é chamado dentro de um eventListener (linha 20)
    this.state = {
      numeroDeCliques: 0
    }
  }
  handleClick () {//NÃO pode setar o estado fazendo this.state porque no React o estado é atualizado de forma assícrona, dessa forma ele ganaha eficiência.
    this.setState( ( estadoAnterior, _props ) => ( { // A forma correta de fazer a atualização do estado é chamando uma função que funciona de forma assincrona, que nesse caso é a setState.
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1 // Para atualizar o estado usando o estado anterior é necessário usar uma callback como parâmetro da setState, e o primeiro parâmetro dessa callback será o estado anterior e o segundo parâmetro (que é obrigatório escrever) serão as props desse estado (como nesse caso não foi necessário usar as props foi usado o underline antes do nome props (_props)).Isso garante que quando passamos essa função calback ela só será executada depois que a atualização anterior a ela for executada. 
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
