module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Ankith@123",
    DB: "lms",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  