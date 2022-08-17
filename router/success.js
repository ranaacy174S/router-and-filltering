const express=require('express')


const contactusRouter=express.Router();

contactusRouter.post('/success',(req,res,next)=>{
    res.send('<h1>form filled successfully</h1>')

})

module.exports=contactusRouter;