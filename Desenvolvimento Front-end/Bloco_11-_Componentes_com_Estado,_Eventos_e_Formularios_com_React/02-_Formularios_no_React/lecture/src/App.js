import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

const ESTADO_INICIAL_PESSOA = {
  nome: '',
  descricao: '',
  dataNascimento: '',
  imagem: '',
  trabalha: false,
};
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pessoa: ESTADO_INICIAL_PESSOA,
      pessoas: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState((prevState) => ({
      pessoa: {
        ...prevState.pessoa,
        [name]: value,
      }
    }));
  }

  handleSave(event) {
    // implemente a lógica para salvar os dados da pessoa aqui
  }

  render() {
    return (
      <div className="App">
        <Form { ...this.state.pessoa }
          onInputChange={ this.handleChange }
          onSave={ this.handleSave }
        />
        <hr />
        <Card { ...this.state.pessoa } />
      </div>
    );
  }
}

export default App;
