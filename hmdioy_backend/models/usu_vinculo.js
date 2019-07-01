'use strict';
module.exports = (sequelize, DataTypes) => {
  const usu_vinculo = sequelize.define('usu_vinculo', {
    vin_id: DataTypes.INTEGER,
    vin_usu_origem: DataTypes.INTEGER,
    vin_usu_destino: DataTypes.INTEGER,
    vin_aceito: DataTypes.BOOLEAN,
    vin_alerta: DataTypes.BOOLEAN
  }, {});
  usu_vinculo.associate = function(models) {
    // associations can be defined here
  };
  return usu_vinculo;
};