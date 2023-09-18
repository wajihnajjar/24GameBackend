const createLevel  = require("../controllers/createLevel.controllers")
const router = require('express').Router()
router.get("/",createLevel.CreateAllArrays)

module.exports= router