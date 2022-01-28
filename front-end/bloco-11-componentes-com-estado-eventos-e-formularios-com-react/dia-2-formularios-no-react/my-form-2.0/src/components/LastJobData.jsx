import React, { Component } from 'react';
import TextArea from './TextArea';
import Input from './Input';

class LastJobData extends Component {
  render() {
    const { curriculumResume, role, roleDescription, handleChange } = this.props;

    return (
      <section>
        <fieldset>
          <legend>Dados do Último Emprego:</legend>
          
          <TextArea
            label="Resumo do Currículo:"
            name="curriculumResume"
            placeholder="Digite um resumo sobre o seu currículo"
            cols={50}
            rows={10}
            maxLength={1000}
            value={ curriculumResume }
            required={ true }
            handleChange={ handleChange }
          />

          <Input
            label="Cargo:"
            type="text"
            name="role"
            placeholder="Digite seu cargo"
            maxLength={40}
            value={ role }
            required={ true }
            handleChange={ handleChange }
          />

          <TextArea
            label="Descrição do Cargo:"
            name="roleDescription"
            placeholder="Digite a descrição do cargo"
            cols={50}
            rows={5}
            maxLength={500}
            value={ roleDescription }
            required={ true }
            handleChange={ handleChange }
          />

        </fieldset>
      </section>
    );
  }
}

export default LastJobData;