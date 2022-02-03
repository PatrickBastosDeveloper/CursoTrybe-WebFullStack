import React, { Component } from 'react';
import notFoundImage from '../img/not-found.png';

class NotFound extends Component {
  render() {
    return (
      <>
        <h1>Ops... nada encontrado aqui (404)</h1>
        <img width="800" src={ notFoundImage } alt="" />
      </>

    );
  }
}

export default NotFound;
