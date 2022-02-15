import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainCharacters from './pages/MainCharacters';
import FavoriteCharacters from './pages/FavoriteCharacters';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ MainCharacters } />
          <Route exact path="/favorites" component={ FavoriteCharacters } />
        </Switch>
      </div>
    );
  }
}

export default App;
