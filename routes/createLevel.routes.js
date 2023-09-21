const createLevel  = require("../controllers/createLevel.controllers")
const router = require('express').Router()
router.get("/",createLevel.CreateAllArrays)
router.get("/comb",createLevel.CreateAllPossibleCombination)

module.exports= router