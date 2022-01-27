// Um estado representa um momento de um componente dinâmico. Se o seu componente é um relógio, o estado atual dele é a hora atual. Se o seu componente é uma tabela cujo conteúdo muda de acordo com o que o usuário clica na página, o estado dele contém o conteúdo da tabela. Se o seu componente fosse um jogo de videogame, o estado seria o momento em que você está no jogo, a sua quantidade de vidas, munição, itens etc. Estado é, então, um momento de algo que pode mudar ao longo do tempo (dinâmico) . É uma informação que você quer preservar enquanto o componente está interagindo com quem usa.

// O Estado de um componente é um lugar especial que todo componente tem para armazenar informações que devem persistir enquanto a tela não for fechada ou atualizada . É o filtro selecionado, o item da lista destacado, o carrinho de compras, tudo isso e mais!
// Essa é, talvez, a peça mais essencial para o funcionamento do React. Enquanto numa aplicação JavaScript sem uso de bibliotecas tais informações ficariam, muito provavelmente, espalhadas e desorganizadas, no React cada componente cuida das suas informações e o React garante que todas estejam atualizadas de maneira otimizada. Mas, antes de nos aprofundarmos em como usamos o Estado de um componente, vamos dar um passo atrás e falar de Eventos 

// O estado dos componentes é o que dá dinamismo às páginas do React , de acordo com a interação de quem usa.

// Para acessar uma função que criamos dentro de uma classe num eventListener precisamos explicitar a origem de nossa função com a sintaxe this.minhaFuncao .

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log('Clicou!')
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <button type="button" onClick={this.handleClick}>Meu botão</button>;
  }
}

export default App;

// Constructor
// Toda classe em JavaScript tem acesso a um método chamado constructor() , e com as classes de React, definidas com class MinhaClasse extends React.Component , não é diferente! Quando um componente React é criado, ou seja, quando é colocado na tela do navegador, a primeira coisa que é executada é a função constructor() . Toda a lógica interna que o React adiciona aos seus componentes começa a ser inclusa neles nesse momento.
// No JavaScript, o super() refere-se ao construtor da classe pai. (No nosso caso, refere-se à implementação de React.Component .) É importante lembrar que você não pode usar o this em um construtor até que você tenha chamado o construtor da classe pai, o JavaScript não vai te deixar fazer isso. Então, por hora, apenas lembre-se que para usar o this dentro do constructor() é preciso chamar o super() antes. Ter isso em mente vai ser muito importante ao lidar com estados nas classes!
// A grande questão, no entanto, é que é possível adicionar aos construtores das classes React comportamentos e lógica extras! Fazemos assim:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;

// Pelos motivos que veremos a seguir, conhecer o construtor é peça fundamental para usarmos Eventos e Estados nos componentes do React !

// this
// O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente .

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;

// App {
//   context: {}
//   props: {}
//   refs: {}
//   state: null
//   updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
//   _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
//   _reactInternalInstance: {_processChildContext: ƒ}
//   isMounted: (...)
//   replaceState: (...)
//   __proto__: Component
//     constructor: class App
//     isMounted: (...)
//     render: ƒ render()
//     replaceState: (...)
//     __proto__: {...}
//   // ... Continua
//   }

// Como se pode ver, o this , dentro das classes de componentes React , é um objeto enorme que contém, basicamente, tudo que concerne aquele componente dentro da aplicação. Quando fazemos this.props , estamos acessando a chave props dentro do objeto this , que irá conter as propriedades ( props vem de propriedades !) passadas àquele componente. Com ele, por exemplo, conseguimos acessar as props e outras coisas, como o estado do componente , dentro das funções render e constructor , para dar dois exemplos.

// Quando definimos funções nossas numa classe de componente React , ele não funciona tão bem!
// Esse comportamento acontece, em resumo, em função de dificuldades que o JavaScript tem com a implementação de uma lógica de classes, lógica para qual a linguagem não foi feita! (Temos links interessantes para se aprofundar a respeito no final do dia!). A solução é, no constructor , fazermos para cada uma de nossas funções um vínculo "manual" da nossa função com o this

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;