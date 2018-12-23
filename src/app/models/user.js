module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      provider: DataTypes.BOOLEAN
    },
    {}
  )
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
