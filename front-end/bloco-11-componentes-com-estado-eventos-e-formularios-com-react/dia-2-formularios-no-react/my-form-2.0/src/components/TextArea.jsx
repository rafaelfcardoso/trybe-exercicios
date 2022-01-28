import React, { Component } from 'react';
import './TextArea.css';

class TextArea extends Component {
  render() {
    const { label, name, placeholder, cols, rows  } = this.props;
    const { maxLength, value, required, handleChange } = this.props;

    return (
      <label htmlFor={ name } className="textarea-label-form">
        { label }
        <textarea
        id={ name }
        name={ name }
        placeholder={ placeholder }
        cols={ cols }
        rows={ rows }
        maxLength={ maxLength }
        value={ value }
        required={ required }
        onChange={ handleChange }
        className="textarea-form"
        >
      </textarea>
    </label>
    );
  }
}

export default TextArea;