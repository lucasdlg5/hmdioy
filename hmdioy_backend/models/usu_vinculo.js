'use strict';
module.exports = (sequelize, DataTypes) => {
  const usu_vinculo = sequelize.define('usu_vinculo', {
    vin_id: {type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey: true, comment: "Campo de ID da tabela" },
    vin_usu_origem: { 
      type: DataTypes.INTEGER, 
      references: {
        model: 'usuario', // name of Target model
        key: 'usu_id', // key in Target model that we're referencing
      }
    },
    vin_usu_destino: { 
      type: DataTypes.INTEGER, 
      references: {
        model: 'usuario', // name of Target model
        key: 'usu_id', // key in Target model that we're referencing
      }
    },
    vin_aceito: DataTypes.BOOLEAN,
    vin_alerta: DataTypes.BOOLEAN
  }, {timestamps: false});
  usu_vinculo.associate = function(models) {
    usu_vinculo.belongsTo(models.usuario, {as: 'vin_usu_origem', foreignKey: 'usu_id'})
    usu_vinculo.belongsTo(models.usuario, {as: 'vin_usu_destino', foreignKey: 'usu_id'})
    usu_vinculo.hasMany(models.historico_cobranca)
  };
  usu_vinculo.removeAttribute('id');
  return usu_vinculo;
};