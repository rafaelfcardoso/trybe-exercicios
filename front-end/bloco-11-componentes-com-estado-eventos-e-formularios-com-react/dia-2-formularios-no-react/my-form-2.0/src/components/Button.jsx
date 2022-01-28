import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { type, value, onClick } = this.props;

    return (
      <button
        type={ type }
        value={ value }
        onClick={ onClick }
        className={`btn-${type}-form`}
      >
        { value }
      </button>
    );
  }
}

export default Button;