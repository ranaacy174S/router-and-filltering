const express = require('express');
const app = express();
const  bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));

const addpro  = require('./router/admin');
const product = require('./router/shop');

app.use('/admin',addpro);
app.use('/shop',product);


app.use((req,res)=>{
  res.status(404).send('<h1> page  not found</h1>')
  
  })

app.listen(3000);