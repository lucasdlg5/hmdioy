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
        type: Sequelize.INTEGER
      },
      vin_usu_destino: {
        type: Sequelize.INTEGER
      },
      vin_aceito: {
        type: Sequelize.BOOLEAN
      },
      vin_alerta: {
        type: Sequelize.BOOLEAN
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