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
        type: Sequelize.INTEGER,
        references: {
          model: 'usu_vinculos', // name of Target model
          key: 'vin_id', // key in Target model that we're referencing
        },
      },
      hist_valor_entrada: {
        type: Sequelize.INTEGER(9),
        allowNull: false,
      },
      hist_usu_id_acao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'usu_vinculos', // name of Target model
        //   key: 'vin_id', // key in Target model that we're referencing
        // }
      },
      hist_valor_atual: {
        type: Sequelize.INTEGER(9),
        allowNull: false,
      },
      hist_valor_final: {
        type: Sequelize.INTEGER(9),
        allowNull: false,
      },
      hist_descricao: {
        type: Sequelize.STRING(100)
      },
      hist_usu_id_devedor: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'usu_vinculos', // name of Target model
        //   key: 'usu_id', // key in Target model that we're referencing
        // }
      },
      hist_data: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('historico_cobrancas');
  }
};