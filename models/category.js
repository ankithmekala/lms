module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
      category_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'category_id'
      },
      category_Name: {
        type: DataTypes.STRING,
        field: 'category_Name'
      }
    });
    return Category;
  };