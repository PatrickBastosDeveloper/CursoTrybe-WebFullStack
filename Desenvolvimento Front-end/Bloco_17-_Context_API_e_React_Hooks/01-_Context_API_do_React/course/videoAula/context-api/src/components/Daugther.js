import React, { Component } from 'react'
import MyContext from './MyContext';

export default class Daugther extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filhaaaaa</h4>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{ `Eu tenho ${ value.money } pra gastar` }</p>
                <button onClick={ value.spendMoney }>Pedir um Ifood</button>
              </div>
           )
          }
        </MyContext.Consumer>
        
        
      </div>
    )
  }
}
