import React, { Component } from 'react';
import PersonalData from './PersonalData';
import LastJobData from './LastJobData';
import ShowData from './ShowData';
import Button from './Button';
import { allInitials } from '../data';
import './Form.css'

const INITIAL_STATE = {
  fullname: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: allInitials[0].toUpperCase(),
  addressType: '',
  curriculumResume: '',
  role: '',
  roleDescription: '',
  submitted: false,
};

class Form extends Component {
  constructor() {
    super()

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target

    this.setState({
      [name]: (name === 'fullname') ? value.toUpperCase() : value,
    });
  }

  sendForm() {
    this.setState({ submitted: true })
  }

  resetForm() {
    this.setState(INITIAL_STATE);
  }

  render() {
    const { fullname, email, cpf, address, city, state, addressType } = this.state;
    const { curriculumResume, role, roleDescription, submitted } = this.state;

    return (
      <>
        <form className="form-container" hidden={ submitted }>
          <h1 className="h1-form">Formulário de Cadastro de Currículo</h1>
          
          <PersonalData
            fullname={ fullname }
            email={ email }
            cpf={ cpf }
            address={ address }
            city={ city }
            state={ state }
            addressType={ addressType }
            handleChange={ this.handleChange }
          />

          <LastJobData
            curriculumResume={ curriculumResume }
            role={ role }
            roleDescription={ roleDescription }
            handleChange={ this.handleChange }
          />

          <div className="btn-container">
            <Button
              type="button"
              value="Enviar"
              onClick={ this.sendForm }
            />

            <Button
              type="reset"
              value="Limpar"
              onClick={ this.resetForm }
            />
          </div>

        </form>

        <ShowData
          fullname={ fullname }
          email={ email }
          cpf={ cpf }
          address={ address }
          city={ city }
          state={ state }
          addressType={ addressType }
          curriculumResume={ curriculumResume }
          role={ role }
          roleDescription={ roleDescription }
          hidden={ !submitted }
        />
      </>
    );
  }
}

export default Form;