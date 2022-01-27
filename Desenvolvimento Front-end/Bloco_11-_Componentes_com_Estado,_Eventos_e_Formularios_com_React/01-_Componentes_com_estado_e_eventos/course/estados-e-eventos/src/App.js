import React from 'react';

class App extends React.Component{
  constructor() {
    super()
    this.handleClick = this.handleClick.bind( this );
    console.log( 'componente sendo construindo' );
  }
  handleClick () {
    console.log(this)
    console.log('clicou!')
  }
  render () {
    console.log(this)
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
