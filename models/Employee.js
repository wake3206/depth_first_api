const db_depth_first = require("../config/database/db_depth_first");
const Sequelize = require("sequelize");

const Employee = db_depth_first.define(
  "employee",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employee_code:  {type: Sequelize.STRING(6)},
    firstname: {type: Sequelize.STRING(100)},
    surname:  {type: Sequelize.STRING(100)},
    telephone: {type: Sequelize.STRING(10)},
    job_level: {type: Sequelize.TINYINT},
    department:  {type: Sequelize.STRING(100)},
    status: {type: Sequelize.TINYINT},
    manager_id: {type: Sequelize.STRING(45)}
  },
  {
    tableName: "employee",
    underscored: true
  }
);

module.exports = Employee;
