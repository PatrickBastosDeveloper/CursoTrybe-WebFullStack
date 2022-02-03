import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const {
      nome,
      dataNascimento,
      descricao,
      imagem,
      trabalha,
      onInputChange,
      onSave,
    } = this.props;
    return (
      <form>
        <label htmlFor="nome">
          Nome:
          <input name="nome" type="text" value={ nome } onChange={ onInputChange } />
        </label>
        <label htmlFor="nome">
          Data de nascimento:
          <input name="dataNascimento" type="date" value={ dataNascimento } onChange={ onInputChange } />
        </label>
        <label htmlFor="nome">
          Descrição:
          <textarea name="descricao" type="text" value={ descricao } onChange={ onInputChange } />
        </label>
        <label htmlFor="nome">
          Trabalha:
          <input name="trabalha" type="checkbox" checked={ trabalha } onChange={ onInputChange } />
        </label>
        <label htmlFor="nome">
          Imagem:
          <input name="imagem" type="text" value={ imagem } onChange={ onInputChange } />
        </label>
        <button onClick={ onSave } >Salvar</button>
      </form>
    );
  }
}
