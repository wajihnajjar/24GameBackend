const createLevel  = require("../controllers/createLevel.controllers")
const router = require('express').Router()
router.get("/",createLevel.CreateAllArrays)
router.post("/comb",createLevel.CreateAllPossibleCombination)

module.exports= router