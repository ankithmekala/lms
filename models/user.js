module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:'userId'
      },
          
      userName: {
        type: DataTypes.STRING,
        field: 'userName'
      },
      password: {
        type: DataTypes.STRING,
        field: 'password'
  
      },
      gender: {
        type: DataTypes.STRING,
        field: 'gender'
  
      },
      date_Of_birth: {
        type: DataTypes.DATE,
        field: 'date_Of_birth'
  
      },
      contactNumber: {
        type: DataTypes.INTEGER,
        field: 'contactNumber'
  
      },
      email: {
        type: DataTypes.STRING,
        field: 'email'
  
      },
      address: {
        type: DataTypes.STRING,
        field: 'address'
      }
       });
    return User;
  };