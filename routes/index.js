const router =require("express").Router()
const carsRoute = require("./carsRoute")
router.use(carsRoute)
module.exports=router