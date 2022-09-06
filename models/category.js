module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'category_id'
      },
      category_Name: {
        type: DataTypes.STRING,
        field: 'category_Name'
      }
    });
    return Category;
  };