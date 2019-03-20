const db_depth_first = require("../config/database/db_depth_first");
const Sequelize = require("sequelize");

const Menu = db_depth_first.define(
  "menu",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:  {type: Sequelize.STRING(100)},
    url: {type: Sequelize.STRING(200)},
    icon:  {type: Sequelize.STRING(45)},
    status: {type: Sequelize.TINYINT}
  },
  {
    tableName: "menu",
    underscored: true
  }
);

module.exports = Menu;
