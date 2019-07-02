'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {

      usu_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usu_nome: {
        type: Sequelize.STRING
      },
      usu_email: {
        type: Sequelize.STRING,
        unique: true,
      },
      usu_username: {
        type: Sequelize.STRING,
        unique: true,
      },
      usu_whatsapp: {
        type: Sequelize.STRING
      },
      usu_foto: {
        type: Sequelize.BLOB
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
    return queryInterface.dropTable('usuarios');
  }
};