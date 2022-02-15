import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/" >Todos Personagens</Link>
        <Link to="/favorites" >Personagens Favoritos</Link>
      </nav>
    )
  }
}

export default Header;
