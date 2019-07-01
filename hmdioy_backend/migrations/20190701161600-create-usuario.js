'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usu_id: {
        type: Sequelize.INTEGER
      },
      usu_nome: {
        type: Sequelize.STRING
      },
      usu_email: {
        type: Sequelize.STRING
      },
      usu_username: {
        type: Sequelize.STRING
      },
      usu_whatsapp: {
        type: Sequelize.STRING
      },
      usu_foto: {
        type: Sequelize.BLOB
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
    return queryInterface.dropTable('usuarios');
  }
};