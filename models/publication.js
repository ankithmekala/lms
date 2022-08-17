module.exports = (sequelize, DataTypes) => {
    const Publication = sequelize.define("publication", {
      publication_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:'publication_id'
      },
      publisher_Name: {
        type: DataTypes.STRING,
        field:'publisher_Name'
      }
    });
    return Publication;
  };