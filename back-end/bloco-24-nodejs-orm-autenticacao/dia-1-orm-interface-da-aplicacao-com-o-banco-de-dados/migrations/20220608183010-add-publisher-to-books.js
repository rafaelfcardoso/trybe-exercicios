'use strict';

// Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. 
// Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição.

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisher');
  }
};
