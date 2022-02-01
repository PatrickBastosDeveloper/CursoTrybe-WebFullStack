import React from 'react';

class Input extends React.Component {
  render() {
    const { name, value, onInputChange, type = 'text' } = this.props;
    return (
      <label htmlFor="email">
        {name}
        <input
          type={ type }
          id={ name }
          name={ name }
          onChange={ onInputChange }
          value={ value }
        />
      </label>
    );
  }
}

export default Input;
