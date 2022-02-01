import React from 'react';
import Input from './Input';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    alert(`Foi feito login com email ${email} e senha ${password}`);
  }

  render() {
    const { email, password } = this.state;

    return (
      <section>
        <h2>Login</h2>
        <form onSubmit={ this.handleSubmit }>
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

          <button type="submit">Fazer Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
