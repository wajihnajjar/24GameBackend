var mysql = require("mysql2");

let connection = mysql.createConnection({
        host:"localhost" , 
        user:"root" , 
        password : "root" , 
        database : "24GAME" , 
        
})
connection.connect((err,succ)=>{
if(err)
    console.log(err)
else
    console.log("Database connected")

})
module.exports = connection ;
