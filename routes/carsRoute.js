const express =require("express")
const router =express.Router();
const Car =require("../models/carModel")
router.get("/getallcars",async(req,res)=>{
  try{
    console.log("a")
    const cars=await Car.find()
    res.send(cars)

  }catch(error){
    console.log("b")
    return res.status(300).json(error);
    
  }

});
console.log(router);
module.exports=router;