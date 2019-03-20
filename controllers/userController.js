const Employee = require('../models/Employee');

const logIn = (req,res) => {

  let {params} = req.body;
  let model = JSON.parse(params);


  Employee.findOne({
    where:{
      employee_code:model.code
    }
  }).then(user => {

    res.json({status:true,user})

  }).catch((err)=>{
    res.json({status:false,message:err})
  })

}


module.exports = {
  logIn
}