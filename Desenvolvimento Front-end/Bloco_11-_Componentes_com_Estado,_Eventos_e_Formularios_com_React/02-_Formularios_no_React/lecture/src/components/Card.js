import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const {
      nome,
      imagem,
      descricao,
      trabalha,
      dataNascimento,
    } = this.props;
    return (
      <div>
        <img src={ imagem } alt={ nome } />
        <p>{ nome }</p>
        <p>{ dataNascimento }</p>
        <p>{ descricao }</p>
        <p> trabalha? { trabalha ? 'Sim' : 'Não' }</p>
      </div>
    );
  }
}
