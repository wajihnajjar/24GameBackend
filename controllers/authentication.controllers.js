const bcrypt = require("bcrypt")
const db= require("../database/index")
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.login = async (req,res)=>{
const {email, password} = req.body 
const hash = await bcrypt.hash(password, 10)
db.query(`SELECT * FROM authentication where email= '${email}' and password = '${hash}'`,(err,rez)=>{
  if(err)
    res.status(403).send("Authentication Failed")
  else {
    const token = jwt.sign(
      { password:hash, email },
      process.env.JWT_Key,
      {
        expiresIn: "2h",
      }
    );
    res.status(200).json({
      message: "Autheticated", 
      token:token
    })
}
})

}
exports.signUp = async  (req,res)=>{
    const {email , password,name , token0 } = req.body 
     const hashedPass = await bcrypt.hash(password , 10) 

      db.query(`INSERT INTO authentication (email , password, name) values ('${email}','${hashedPass}','${name}')`,
      (err,rez)=>{
        if(err)
        res.status(403).send(err)
      else {
        const token = jwt.sign(
          { password:hashedPass, email },
          process.env.JWT_Key,
          {
            expiresIn: "2h",
          }
        );
        res.status(200).json({
          message: "Autheticated", 
          token:token
        })
  
      }
      })
        
}