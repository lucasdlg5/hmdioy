'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usu_vinculos', {
      vin_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vin_usu_origem: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios', // name of Target model
          key: 'usu_id', // key in Target model that we're referencing
        },
        allowNull: false,
      },
      vin_usu_destino: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios', // name of Target model
          key: 'usu_id', // key in Target model that we're referencing
        },
        allowNull: false,
      },
      vin_aceito: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      vin_alerta: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE(6)
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE(6)
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usu_vinculos');
  }
};