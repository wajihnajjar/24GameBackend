const createLevel  = require("../controllers/createLevel.controllers")
const router = require('express').Router()
router.get("/",createLevel.CreateAllArrays)
router.post("/comb",createLevel.CreateAllPossibleCombination)
router.get("/getAllLevels",createLevel.getAllLevels)
router.get("/getAllLevelsV1",createLevel.getAllLevelsV1)
module.exports= router