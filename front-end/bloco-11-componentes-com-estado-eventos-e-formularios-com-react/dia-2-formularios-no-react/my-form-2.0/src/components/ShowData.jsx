import React, { Component } from 'react';
import './ShowData.css';

class ShowData extends Component {
  render() {
    const { fullname, email, cpf, address, city, state, addressType } = this.props;
    const { curriculumResume, role, roleDescription, hidden } = this.props;

    return (
      <div hidden={ hidden } /* className="div-show-data-container" */>
        <h3>Consolidado de dados do formulário</h3>
        <p>Nome: { fullname }</p>
        <p>E-mail: { email }</p>
        <p>CPF: { cpf }</p>
        <p>Endereço: { address }</p>
        <p>Cidade: { city }</p>
        <p>Estado: { state.toUpperCase() }</p>
        <p>Tipo de Moradia: { addressType }</p>
        <p>Resumo do Currículo: { curriculumResume }</p>
        <p>Cargo: { role }</p>
        <p>Descrição do Cargo: { roleDescription }</p>
      </div>
    );
  }
}

export default ShowData;