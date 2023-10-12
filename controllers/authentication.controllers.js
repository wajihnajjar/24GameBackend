const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.login = (req,res)=>{
res.send("Logged")
}
exports.signUp = async  (req,res)=>{
    const {email , password,name , token0 } = req.body 
     const hashedPass = await bcrypt.hash(password , 10) 
     const token = jwt.sign(
        { user_id:0, email },
        process.env.JWT_Key,
        {
          expiresIn: "5m",
        }
      );
      console.log(token)
      //const decoded = jwt.verify(token, process.env.JWT_Key)
      //console.log(decoded)

      res.status(200).json({
        message: "Autheticated", 
        token:token
      })
        
}