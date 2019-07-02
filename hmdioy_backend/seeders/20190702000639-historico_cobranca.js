'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('historico_cobrancas', [
      {
      HIST_USU_VIN_ID: 1,
      HIST_VALOR_ENTRADA: 30,
      HIST_USU_ID_ACAO: 1,
      HIST_VALOR_ATUAL: 10,
      HIST_VALOR_FINAL: 40,
      HIST_DESCRICAO: 'Paguei pizza pro John porque ele estava sem dinheiro',
      HIST_USU_ID_DEVEDOR: 2,
      HIST_DATA: new Date()
      // createdAt: Date.now(),
      // updatedAt: Date.now()
    },
    {
      HIST_USU_VIN_ID: 1,
      HIST_VALOR_ENTRADA: 50,
      HIST_USU_ID_ACAO: 2,
      HIST_VALOR_ATUAL: 40,
      HIST_VALOR_FINAL: 10,
      HIST_DESCRICAO: 'Paguei pizza pro John porque ele estava sem dinheiro',
      HIST_USU_ID_DEVEDOR: 1,
      HIST_DATA: new Date()
      // createdAt: Date.now(),
      // updatedAt: Date.now()
    },
      {
      HIST_USU_VIN_ID: 1,
      HIST_VALOR_ENTRADA: 5,
      HIST_USU_ID_ACAO: 1,
      HIST_VALOR_ATUAL: 10,
      HIST_VALOR_FINAL: 5,
      HIST_DESCRICAO: 'Paguei pizza pro John porque ele estava sem dinheiro',
      HIST_USU_ID_DEVEDOR: 1,
      HIST_DATA: new Date()
      // createdAt: Date.now(),
      // updatedAt: Date.now()
    },
      {
      HIST_USU_VIN_ID: 1,
      HIST_VALOR_ENTRADA: 5,
      HIST_USU_ID_ACAO: 1,
      HIST_VALOR_ATUAL: 5,
      HIST_VALOR_FINAL: 0,
      HIST_DESCRICAO: 'Paguei pizza pro John porque ele estava sem dinheiro',
      HIST_USU_ID_DEVEDOR: 0,
      HIST_DATA: new Date()
      // createdAt: Date.now(),
      // updatedAt: Date.now()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('historico_cobrancas', null, {});
  }
};
