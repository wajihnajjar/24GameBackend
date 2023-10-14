const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.login = (req,res)=>{
const {email, password} = req.body 


}
exports.signUp = async  (req,res)=>{
    const {email , password,name , token0 } = req.body 
     const hashedPass = await bcrypt.hash(password , 10) 
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