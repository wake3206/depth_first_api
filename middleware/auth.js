var passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt   = require('bcrypt-nodejs');
const key = require('../config/key')


const validateSignup = (req,res,next) =>{

  passport.authenticate('local-signup', function(err, user, info) {
    //console.log('local-signup->',err,user,info)
    try{
      if(err){
        throw err
      }

      if(!user){
        throw {message:info.message}
      }

      //res.json({status:true,user:user});
      req.user = user
      
      next();

    }catch(terr){
      //console.log('validateSignup error',terr)
      res.json({status:false,msg:terr.message})
    }
   
  })(req, res, next);
}

const validateSignin = (req,res,next) => {

  passport.authenticate('local-signin', function(err, user, info) {
    //console.log('authenticate err',err,user,info)
    try{
      if(err){
        throw {message:err.message}
      }

      if(!user){
        throw {message:info.message}
      }
      //req.validateMsg = {user}

      //const user = req.validateMsg.user;
      
      delete user.password;
      //console.log('user',user,'key',key)
      const token = jwt.sign(user, key);

      req.user = user;
      req.token = token;
      next()
      //res.json({status:true,user, token});
      //return res.json({status:'test'})

    }catch(terr){
      res.json({status:false,msg:terr.message})
    }
   
  })(req, res, next);

}

const reqAuth = (req,res,next) => {

  passport.authenticate('jwt', function(err, user, info) {
    //console.log('authenticate-> err:',err,'user:',user,'info:',info)
    try{

      if(err){
        //console.log('in error')
        throw err
      }

      if(!user){
        throw {message:info.message}
      }

      //check agent in header req

      //check login table

      req.user = {...user}
      //console.log('-----> onnext')
      return next()
      //return res.json({status:'test'})

    }catch(terr){
      //console.log('err=>',terr.message)
      res.json({status:false,msg:terr.message})
    }
   
  })(req, res, next);

}

module.exports = {
  validateSignup,
  validateSignin,
  reqAuth
}
