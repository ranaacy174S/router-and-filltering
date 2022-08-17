const express = require('express');
const path = require('path');
const app = express();
const  bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')))

const addpro  = require('./router/admin');
const product = require('./router/shop');
const contact  = require('./router/contactus');
const success   = require('./router/success');

app.use(addpro);
app.use(product);
app.use(contact);
app.use(success);


app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname,'views','err.html'));
  
  })

app.listen(3000);