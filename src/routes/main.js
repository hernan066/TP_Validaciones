const router = require("express").Router()
const {index, register} = require("../controllers/mainController");
const registerValidator = require("../validators/registerValidator");



router
    .get("/", index)
    .post("/", registerValidator, register)
    

module.exports = router;