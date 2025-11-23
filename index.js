const express  =require("express")
const server = require("express")()
const cors = require("cors");
const createLevel=require("./routes/createLevel.routes")
const auth = require("./routes/authentication.routes")
const jwt = require("jsonwebtoken")
require("dotenv").config();

server.use(cors({ origin: "*" })); 
server.use(express.json());
const validateToken = (req,res,next)=>{
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
    console.log(token)
    try{

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        next()

    } catch(err){
        console.log(err)
        res.status(403).send("Non Authenticated") 

    }

}
server.use(express.urlencoded({ extended: true }));
server.use("/auth",auth)
server.use("/create" ,createLevel)
server.get("/",(req,res)=>{
    res.send("<h1>Hello World </h1>")
})

server.listen(4001 ,()=>{
    console.log("Connected in 4001")
})