const bcrypt = require("bcrypt")
const db= require("../database/index")
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.login = async (req,res)=>{
const {email, password} = req.body 
const hash = await bcrypt.hash(password, 10)
db.query(`SELECT * FROM authentication where email= '${email}' and password = '${hash}'`,(err,rez)=>{
  if(err)
    res.status(400).send("Authentication Failed")
  res.status.send(rez)
})

}
exports.signUp = async  (req,res)=>{
    const {email , password,name , token0 } = req.body 
     const hashedPass = await bcrypt.hash(password , 10) 

      db.query(`INSERT INTO authentication (email , password, name) values ('${email},'${password}',${name}')`,
      (err,rez)=>{
        if(err)
        res.status(402).send(err)
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