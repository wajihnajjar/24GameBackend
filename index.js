const express  =require("express")
const server = require("express")()
const cors = require("cors");
const createLevel=require("./routes/createLevel.routes")
const auth = require("./routes/authentication.routes")
server.use(cors({ origin: "*" })); 
server.use(express.json());
const validateToken = (req,res,next)=>{
    

    next()
}
server.use(validateToken)
server.use(express.urlencoded({ extended: true }));
server.use("/auth",auth)
server.use("/create" ,validateToken,createLevel)
server.get("/",(req,res)=>{
    res.send("<h1>Hello World </h1>")
})

server.listen(4001 ,()=>{
    console.log("Connected in 4001")
})