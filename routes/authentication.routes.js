const authentication  = require("../controllers/authentication.controllers")
const router = require('express').Router()
router.post("/login",authentication.login)
