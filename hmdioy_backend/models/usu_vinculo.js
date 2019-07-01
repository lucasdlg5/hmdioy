'use strict';
module.exports = (sequelize, DataTypes) => {
  const usu_vinculo = sequelize.define('usu_vinculo', {
    vin_id: {type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey: true, comment: "Campo de ID da tabela" },
    vin_usu_origem: DataTypes.INTEGER,
    vin_usu_destino: DataTypes.INTEGER,
    vin_aceito: DataTypes.BOOLEAN,
    vin_alerta: DataTypes.BOOLEAN
  }, {});
  usu_vinculo.associate = function(models) {
    usu_vinculo.hasOne(models.usuario, {as: 'vin_usu_origem', foreignKey: 'usu_id'})
    usu_vinculo.hasOne(models.usuario, {as: 'vin_usu_destino', foreignKey: 'usu_id'})
  };
  return usu_vinculo;
};