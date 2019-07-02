'use strict';
// sequelize db:migrate
// sequelize db:seed:all
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [{
      usu_nome: 'Lucas Domingos Leão Gomes',
      usu_email: 'lucasdomingosleao55@hotmail.com',
      usu_username: 'lucasdlg',
      usu_whatsapp: '+55(12)99638-1184',
      usu_foto: null,
      // createdAt: Date.now(),
      // updatedAt: Date.now()

    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
