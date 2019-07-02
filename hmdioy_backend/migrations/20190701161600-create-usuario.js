'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {

      usu_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      usu_nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      usu_email: {
        type: Sequelize.STRING(100),
        unique: true,
        isEmail: true,
        allowNull: false,
      },
      usu_username: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false,
      },
      usu_whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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