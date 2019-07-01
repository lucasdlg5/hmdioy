'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    usu_id: DataTypes.INTEGER,
    usu_nome: DataTypes.STRING,
    usu_email: DataTypes.STRING,
    usu_username: DataTypes.STRING,
    usu_whatsapp: DataTypes.STRING,
    usu_foto: DataTypes.BLOB
  }, {});
  usuario.associate = function(models) {
    // associations can be defined here
  };
  return usuario;
};