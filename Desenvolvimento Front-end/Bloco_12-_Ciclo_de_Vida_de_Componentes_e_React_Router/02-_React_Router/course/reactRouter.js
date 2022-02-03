// SPA - Single Page Application
// Um aplicativo de página única é uma aplicação web ou site que consiste de uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop.

// props.children

// Children é uma ótima ferramenta para reutilização de componentes. A utilização é bem simples, veja abaixo:

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}

// E dessa forma podemos acessar e exibir na tela o valor SUPIMPA no ComponentePai:

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

// Nesse exemplo utilizamos uma tag p , mas note que poderia ser um ou vários elementos de qualquer natureza, seja uma tag, ou até um componente. Ainda sim, ela é acessada da mesma forma dentro de ComponentePai . É importante perceber que, no caso acima, props.children é um objeto por ser apenas um elemento. Caso o ComponentePai esteja com mais de um elemento dentro como no exemplo abaixo, props.children se torna um array de objetos , com as informações de cada filho.

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}     

// Para poder fazer uso de React Router , é preciso que se instale em uma aplicação React o pacote react-router-dom:

// npm install react-router-dom@v5

// BrowserRouter

// BrowserRouter é o componente que encapsula a sua aplicação, de forma a te possibilitar fazer uso de navegação.

// Route

// Route é o componente fundamental em React Router , que estabelece o mapeamento entre o caminho de URL declarado com o componente.

// <Route path="/about" component={About} /> : lê-se que se o caminho da URL atual do navegador começa com o caminho /about , como declarado na prop path no componente Route , há uma correspondência entre os caminhos da URL e do componente Route , e o componente About será renderizado. Ou seja, se o caminho da URL atual for /home , não há correspondência, logo o componente About não será renderizado. Entretanto, se a URL atual for /about ou /about/me , há correspondência, e o componente About é renderizado. O parâmetro exact entra em ação quando você tem vários caminhos com nomes semelhantes.
// <Route exact path="/about" component={About} /> : lê-se que, se houver uma correspondência exata entre o caminho da URL atual e o caminho /about declarado em Route , o componente será renderizado.

// OBS : Além dessas duas formas de renderização de componente com Route , você pode fazer uso de elemento children . Ou seja, se você tiver a rota <Route path="/about" component={About} /> , você também poderá fazer da seguinte forma:

<Route path="/about" >
<About />
</Route>

// Link

// Link é o componente a ser usado no lugar de elementos com a tag a , de forma a disponibilizar navegação por URL na sua aplicação SPA sem o recarregamento de página que a tag a exige.

<Link to="/about" > About </Link>

// E lembre-se: palavras, imagens, até mesmo outros componentes podem ser componentes filhos do Link ! Ser filho do Link significa que, se você clicar neste filho, irá para onde o Link te direciona!

// Componentes Route com passagem de props

// Já a prop render de Route é usada quando é necessário passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente Movies que precisa receber uma lista de filmes via props movies , e você precisa mapeá-lo para o caminho de URL /movies , você poderia criar uma rota da seguinte forma: <Route path="/movies" render={(props) => <Movies {...props} movies={['Cars', 'Toy Story', 'The Hobbit']} />} /> ;

// Vale Ressaltar:

// Tanto component quanto render permitem que você tenha acesso a informações de rota ( match , location e history ) via props do componente que você está mapeando. Ou seja, se você tem a rota <Route path="/about" component={About} /> , About terá match , location e history setadas via props.

// Componentes Route com passagem de parâmetro (rotas dinâmicas)

// O interessante em rotas dinâmicas é que podemos utilizar o mesmo componente para renderizar vários caminhos diferentes. Para fazer uso de parâmetro de URL em Route , é preciso fazer uso da sintaxe :nome_do_parametro dentro da propriedade path . Ou seja, <Route path="/movies/:movieId" component={Movie} /> vai definir um parâmetro chamado movieID , e o componente Movie é mapeado a qualquer um dos seguintes caminhos de URL :
// /movies/1 ;
// /movies/2 ;
// /movies/thor .