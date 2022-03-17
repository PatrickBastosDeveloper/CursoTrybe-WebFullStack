import React, { Component } from 'react'
import Grandmother from './Grandmother';
import MyContext from './MyContext';

export default class GreatGrandmother extends Component {
  state = {
    money: 1000000,
  }
  
  handleSpendMoney=()=>{
    this.setState((prevState) => ({
      money:prevState.money - 100
    }))
  }
  render() {
    const { money } = this.state;
    const contextValue = {
      money: money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
      <div>
        <h1>Eu sou a bisavó</h1>
        <Grandmother />
      </div>
      </MyContext.Provider>
      
    )
  }
}
