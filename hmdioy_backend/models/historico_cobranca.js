'use strict';
module.exports = (sequelize, DataTypes) => {
  const historico_cobranca = sequelize.define('historico_cobranca', {
    hist_id: DataTypes.INTEGER,
    hist_usu_vin_id: DataTypes.INTEGER,
    hist_valor_entrada: DataTypes.INTEGER,
    hist_usu_id_acao: DataTypes.INTEGER,
    hist_valor_atual: DataTypes.INTEGER,
    hist_valor_final: DataTypes.INTEGER,
    hist_descricao: DataTypes.STRING,
    hist_usu_id_devedor: DataTypes.INTEGER,
    hist_data: DataTypes.DATE
  }, {});
  historico_cobranca.associate = function(models) {
    // associations can be defined here
  };
  historico_cobranca.removeAttribute('id');
  return historico_cobranca;
};