import React, { Component } from 'react';
import './RadioInput.css';

class RadioInput extends Component {
  render() {
    const { label, type, name, handleChange  } = this.props;

    return (
      <label className="input-label-form">
        { label }
        
        <label htmlFor={ name } className="radio-label-form">
          <input
          type={ type }
          id={ name }
          name={ name }
          value="Casa"
          onChange={ handleChange }
          />
          Casa
        </label>

        <label htmlFor={ name } className="radio-label-form">
          <input
          type={ type }
          id={ name }
          name={ name }
          value="Apartamento"
          onChange={ handleChange }
          />
          Apartamento
        </label>

      </label>

    );
  }
}

export default RadioInput;