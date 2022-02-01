import React from 'react';
import Input from './Input';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    const { name, email, password } = this.state;
    event.preventDefault();
    alert(`Foi feito Cadastro com nome ${name} email ${email} e senha ${password}`);
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <section>
        <h2>Cadastro</h2>
        <form onSubmit={ this.handleSubmit }>
          <Input
            name="name"
            value={ name }
            onInputChange={ this.handleChange }
          />
          <Input
            name="email"
            type="email"
            value={ email }
            onInputChange={ this.handleChange }
          />
          <Input
            name="password"
            type="password"
            value={ password }
            onInputChange={ this.handleChange }
          />
          <button type="submit">Cadastre-se</button>
        </form>
      </section>
    );
  }
}

export default RegisterForm;
