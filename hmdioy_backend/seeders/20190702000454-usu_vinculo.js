'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usu_vinculos', [{
      VIN_USU_ORIGEM: 1,
      VIN_USU_DESTINO: 2,
      VIN_ACEITO: 0,
      VIN_ALERTA: 1,
      // createdAt: Date.now(),
      // updatedAt: Date.now()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usu_vinculos', null, {});
  }
};
