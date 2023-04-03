const express = require("express");
const app = express();
const cors= require('cors')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


require('dotenv').config({path:'./config/.env'})
const port = process.env.PORT || 5000;
const {connectdb}=require('./config/connectdb')

app.use('/auth',require('./routes/authRoutes'))
app.use('/products',require('./routes/productRoutes'))
app.use('/user',require('./routes/userRoutes'))
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*")
  res.setHeader('Access-Control-Request-Method',"*")
  res.setHeader('Access-Control-Allow-Headers',"*")
  next()

})
connectdb() 


app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${port}`)
);
  