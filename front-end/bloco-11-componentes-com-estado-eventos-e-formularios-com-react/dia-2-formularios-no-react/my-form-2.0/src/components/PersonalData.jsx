import React, { Component} from 'react';
import Input from './Input';
import SelectState from './SelectState';
import RadioInput from './RadioInput';

class PersonalData extends Component {
  render() {
    const { fullname, email, cpf, address, city, state, checked, handleChange } = this.props;

    return (
      <section>
        <fieldset>
          <legend>Dados Pessoais:</legend>
          
          <Input
            label="Nome:"
            type="text"
            name="fullname"
            placeholder="Digite seu nome"
            maxLength={40}
            value={ fullname }
            required={ true }
            handleChange={ handleChange }
          />

          <Input
            label="E-mail:"
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            maxLength={50}
            value={ email }
            required={ true }
            handleChange={ handleChange }
          />

          <Input
            label="CPF:"
            type="text"
            name="cpf"
            placeholder="Digite seu CPF"
            maxLength={11}
            value={ cpf }
            required={ true }
            handleChange={ handleChange }
          />

          <Input
            label="Endereço:"
            type="text"
            name="address"
            placeholder="Digite seu endereço"
            maxLength={200}
            value={ address }
            required={ true }
            handleChange={ handleChange }
          />

          <Input
            label="Cidade:"
            type="text"
            name="city"
            placeholder="Digite sua cidade"
            maxLength={28}
            value={ city }
            required={ true }
            handleChange={ handleChange }
          />

          <SelectState
            label="Estado:"
            name="state"
            value={ state }
            required={ true }
            handleChange={ handleChange }
          />

          <RadioInput
            label="Tipo de Moradia:"
            type="radio"
            name="addressType"
            checked= { checked }
            handleChange={ handleChange }
          />

        </fieldset>
      </section>
    );
  }
}

export default PersonalData;