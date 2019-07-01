'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('historico_cobrancas', {
      hist_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hist_usu_vin_id: {
        type: Sequelize.INTEGER
      },
      hist_valor_entrada: {
        type: Sequelize.INTEGER
      },
      hist_usu_id_acao: {
        type: Sequelize.INTEGER
      },
      hist_valor_atual: {
        type: Sequelize.INTEGER
      },
      hist_valor_final: {
        type: Sequelize.INTEGER
      },
      hist_descricao: {
        type: Sequelize.STRING
      },
      hist_usu_id_devedor: {
        type: Sequelize.INTEGER
      },
      hist_data: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('historico_cobrancas');
  }
};