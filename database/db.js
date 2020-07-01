const Sequelize = require("sequelize");
const sequelize = new Sequelize("koatasks", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
});

module.exports = sequelize;
