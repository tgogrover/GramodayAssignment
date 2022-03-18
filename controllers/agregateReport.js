const reportModel=require('../models/report');
const agregateReportModel=require('../models/agregateReport')

exports.agregateReport=async(req,res)=>{
    const {reportID}=req.query;
    console.log(reportID)
    const aggregateReport= await agregateReportModel.findOne({_id:reportID}).exec();
    console.log(aggregateReport)
    if(aggregateReport==null){
        res.status(400).json({
            Message:'No aggregate report exists  for this reportID  in DB'
        })
    }
    else{
        const {_id,marketID,marketName,cmdtyID,priceUnit,price,users,cmdtyName}=aggregateReport
        res.status(400).json({
            _id,marketID,marketName,cmdtyID,priceUnit,price,users,cmdtyName
            
        })

    }
}

exports.createAgregateReport=async(req,res)=>{
    const {reportID,cmdtyID}=req.body;
    const Reports= await reportModel.find({reportID:reportID}).exec();
  
    if(Reports.length===0){
        res.status(400).json({
            Message:'No report exists  for this reportID  in DB'
        })
    }
    else{
        let sumTotalPriceInKg=0;
        const users=[];
     
     for(var i=0;i<Reports.length;i++){
         const {convFctr,price,marketID,marketName,userID}=Reports[i];
         users.push(userID);
         sumTotalPriceInKg+=price/convFctr;
        
        console.log(marketID,marketName)

     }
     let avgPriceInKg=sumTotalPriceInKg/Reports.length;
     const marketID=Reports[0].marketID;
     const marketName=Reports[0].marketName;
     const cmdtyName=Reports[0].cmdtyName;
  

     const aggregateReport=new agregateReportModel({
              _id:reportID,
                marketID,
               marketName,
               cmdtyID,
               priceUnit:'kg',
               price:avgPriceInKg,
               users,
               cmdtyName,
               users

     })
     await aggregateReport.save();
     if(aggregateReport){
        const {_id,marketID,marketName,cmdtyID,priceUnit,price,users,cmdtyName}=aggregateReport
        res.status(200).json({
            _id,marketID,marketName,cmdtyID,priceUnit,price,users,cmdtyName
       })
     }
     
 
         
    }
}