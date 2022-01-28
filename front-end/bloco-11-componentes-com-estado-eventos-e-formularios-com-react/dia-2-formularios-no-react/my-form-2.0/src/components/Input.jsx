import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    const { label, type, name, placeholder  } = this.props;
    const { maxLength, value, required, handleChange } = this.props;
    return (
      <label htmlFor={ name } className="input-label-form">
        { label }
        <input
        type={ type }
        id={ name }
        name={ name }
        placeholder={ placeholder }
        maxLength={ maxLength }
        value={ value }
        required={ required }
        onChange={ handleChange }
        className="input-form"
        />
      </label>
    );
  }
}

export default Input;