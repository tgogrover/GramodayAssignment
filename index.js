//require pakages
const express=require('express');
const app=express();
const mongoose=require("mongoose");
const api_CreateReport_Route=require('./routes/report');
const api_AgregateReport_Route=require('./routes/aggregateReport');
// const api_ProductRoute=require('./routes/product');
// const api_orderRoute=require('./routes/order');

require('dotenv').config();



//mongoose connection
mongoose.connect('mongodb://localhost:27017/GramoDayAssignment',
{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('error',(err)=>{
console.log(' error connecting with mongodb with'+ err)
});

mongoose.connection.on('connected',()=>{
console.log('mongodb is connected with server successfully')});

//middlewares
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 

app.use(api_CreateReport_Route);
app.use(api_AgregateReport_Route);
// app.use(api_ProductRoute);
// app.use(api_orderRoute);







app.listen(process.env.PORT || 3000,()=>{
    console.log(`server is successfully running on server ${process.env.PORT}`)
})