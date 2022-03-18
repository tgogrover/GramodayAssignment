const mongoose=require('mongoose');

//defining the schema
var ReportSchema=new mongoose.Schema({

    userID:{
        type:String,
        required:true,
    },
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
    marketType:{
        type:String,
       required:true,
    },
    priceUnit:{
        type:String,
       required:true,
    },
    price:{
        type:Number,
       required:true,
    },
    convFctr:{
        type:Number,
       required:true,
    },
    reportID:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date
    }
});




//exporting report model
module.exports=mongoose.model('Report',ReportSchema)