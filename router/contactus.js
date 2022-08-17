const express=require('express')
const path=require('path')


const contactusRouter=express.Router();

contactusRouter.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contactform.html'))

})

module.exports=contactusRouter;