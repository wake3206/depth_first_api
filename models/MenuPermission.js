const db_depth_first = require("../config/database/db_depth_first");
const Sequelize = require("sequelize");
const Menu = require("./Menu");

const MenuPermission = db_depth_first.define(
  "menu_permission",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    menu_id:  {type: Sequelize.INTEGER},
    emp_id: {type: Sequelize.INTEGER},
    status: {type: Sequelize.TINYINT}
  },
  {
    tableName: "menu_permission",
    underscored: true
  }
);

MenuPermission.hasMany(Menu, {as: 'Workers'})

module.exports = MenuPermission;
