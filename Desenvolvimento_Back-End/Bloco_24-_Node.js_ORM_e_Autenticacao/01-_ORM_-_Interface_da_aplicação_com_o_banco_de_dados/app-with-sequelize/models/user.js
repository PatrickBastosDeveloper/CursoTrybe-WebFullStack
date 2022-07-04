const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  // aqui inserimos o datatype da coluna criada
  phone_num: DataTypes.STRING,
  });

  return User;
}

module.exports = UserSchema;