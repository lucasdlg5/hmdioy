'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    usu_id: {type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey: true, comment: "Campo de ID da tabela" },
    usu_nome: DataTypes.STRING(70),
    usu_email: DataTypes.STRING(100),
    usu_username: DataTypes.STRING(30),
    usu_whatsapp: DataTypes.STRING(17),
    usu_foto: DataTypes.BLOB('long') 
  }, {});
  usuario.associate = function(models) {
    usuario.belongsTo(models.usu_vinculo);
  };
  return usuario;
};
