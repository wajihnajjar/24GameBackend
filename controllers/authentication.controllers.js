const bcrypt = require("bcrypt")
exports.login = (req,res)=>{
res.send("Logged")
}
exports.signUp = async  (req,res)=>{
    const {email , password,name } = req.body 
     const hashedPass = await bcrypt.hash(password , 10) 
     
}