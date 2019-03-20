
const db_depth_first = require('../config/database/db_depth_first');
const Sequelize = require('sequelize');


const PettyCash = db_depth_first.define('petty_cash', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      code : {type: {type:Sequelize.STRING(12)}},
      emp_id : {type: {type:Sequelize.STRING(13)}},
      description : {type: {type:Sequelize.TEXT}},
      amount : {type:Sequelize.FLOAT(11,4)},
      status : {type:Sequelize.TINYINT},
      create_datetime : {type:Sequelize.DATE},
      update_datetime: {type:Sequelize.DATE},
      
  }, {
    tableName: 'petty_cash',
    underscored:true
  });


// Products.hasOne(ProductDetail)
// ProductDetail.belongsTo(Products)

// Products.hasMany(CartOrders)
// CartOrders.belongsTo(Products)

module.exports = PettyCash;






