module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("role", {
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field:'roleId'
    },
    roleName: {
      type: DataTypes.STRING,
      field:'roleName'
    }
  });
  return Role;
};