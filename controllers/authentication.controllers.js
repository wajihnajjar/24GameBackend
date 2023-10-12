const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.login = (req,res)=>{
res.send("Logged")
}
exports.signUp = async  (req,res)=>{
    const {email , password,name } = req.body 
     const hashedPass = await bcrypt.hash(password , 10) 
     const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
       let a =token 
      res.send(a)
        
}