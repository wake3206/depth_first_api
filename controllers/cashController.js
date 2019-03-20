const PettyCash = require("../models/PettyCash");
const Menu = require("../models/Menu");
const MenuPermission = require("../models/MenuPermission");
const db_depth_first = require("../config/database/db_depth_first");
const Sequelize = require("sequelize");

const loadAllOrders = (req, res) => {
  let {params} = req.body;
  let model = JSON.parse(params);
  //console.log('model',model);

  let filter = {};
  if (model && model.code !== undefined) {
    filter.code = model.code;
  }

  if (model && model.status !== undefined) {
    filter.status = model.status;
  }

  PettyCash.findAll({
    where: filter,
    order: [["id", "DESC"]]
  })
    .then(orders => {
      res.json({status: true, orders: orders});
    })
    .catch(err => {
      res.json({status: false, message: err});
    });
};

const saveOrder = async (req, res) => {
  let {params} = req.body;
  let model = JSON.parse(params);

  let yearNow = new Date().getFullYear();
  let nextCode = "";
  //get max code
  var maxCode = await PettyCash.max("code");

  var maxCodeSplit = maxCode.split("-");
  if (maxCodeSplit.length <= 0) {
    nextCode = `PC-${yearNow}-001`;
  } else {
    if (maxCodeSplit[1] != yearNow) {
      nextCode = `PC-${yearNow}-001`;
    } else {
      nextCode = `PC-${yearNow}-${(parseInt(maxCodeSplit[2]) + 1)
        .toString()
        .padStart(3, "0")}`;
    }
  }

  //console.log( 'nextCode--->',maxCodeSplit, yearNow, nextCode );

  PettyCash.findOrCreate({
    where: {
      id: model.id
    },
    defaults: {
      ...model,
      code: nextCode,
      emp_id: 1,
      create_datetime: new Date().toISOString().slice(0, 10),
      update_datetime: new Date().toISOString().slice(0, 10)
    }
  })
    .then(carts => {
      //console.log('carts', carts)

      const resCart = carts[0];
      const created = carts[1];

      if (!created) {
        //update
        resCart.update(model).then(() => {
          res.json({status: true, msg: "succ", model});
        });
      } else {
        res.json({status: true, msg: "succ", model});
      }
    })
    .catch(error => {
      //console.log('error', error);

      res.json({status: false, msg: error});
    });
};

const deleteOrder = (req, res) => {
  let {params} = req.body;
  let obj = JSON.parse(params);

  PettyCash.findOne({
    where: {id: obj.id}
  })
    .then(model => {
      model
        .destroy({force: true})
        .then(succ => {
          res.json({status: true, succ});
        })
        .catch(error => {
          res.json({status: false, message: error});
        });
    })
    .catch(error => {
      console.log("err", error);
      res.json({status: false, message: error});
    });
};

const loadMenu = (req, res) => {
  let {params} = req.body;
  let model = JSON.parse(params);
  //console.log('model',model);

  let empId = (model.empId)? model.empId:0;

  let sql = `SELECT m.* FROM menu m INNER JOIN menu_permission mp ON(m.id = mp.menu_id) where m.status = 1 and mp.emp_id = ${empId} `;

  db_depth_first
    .query(
      sql, 
      { type: Sequelize.QueryTypes.SELECT }
    )
    .then(menus => {
      res.json({status: true, menus});
    })
    .catch(err => {
      res.json({status: false, message: err});
    });

  // Menu.findAll({
  //   where:{
  //     status:1
  //   }
  // }).then(menus => {

  //   res.json({status:true,menus})

  // }).catch((err)=>{
  //   res.json({status:false,message:err})
  // })
};

module.exports = {
  loadAllOrders,
  saveOrder,
  deleteOrder,
  loadMenu
};
