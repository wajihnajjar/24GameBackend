const express  =require("express")
const server = require("express")()
const cors = require("cors");

server.use(cors({ origin: "*" })); 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get("/",(req,res)=>{
    res.send("<h1>Hello World </h1>")
})

server.listen(4001 ,()=>{
    console.log("Connected in 4001")
})