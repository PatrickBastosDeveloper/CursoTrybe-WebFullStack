import React, { Component } from 'react';

class FormToDo extends Component {
  constructor() {
    super();

    this.state = {
      toDo: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { saveTask } = this.props
    const { toDo } = this.state;

    return (
      <form onSubmit={(e) => saveTask(e, toDo)} >
        <input
          type="text"
          name="toDo"
          onChange={this.handleChange}
          value={toDo}
        />
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default FormToDo;
