const mongoose=require('mongoose');

//defining the schema
var AgregateReportSchema=new mongoose.Schema({

    users:[{
        type:String,
        required:true,
    }],
    marketID:{
        type:String,
        required:true,
    },
    marketName:{
        type:String,
        required:true, 
    },
    cmdtyID:{
        type:String,
       required:true,
    },
    cmdtyName:{
        type:String,
       required:true,
    },
    priceUnit:{
        type:String,
        enum:['kg'],
        default:'kg',
       required:true,
    },
    price:{
        type:Number,
       required:true,
    },
    _id:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date
    }
});




//exporting report model
module.exports=mongoose.model('AgreGateReport',AgregateReportSchema)