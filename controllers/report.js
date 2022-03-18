const reportModel=require('../models/report');
const { v4: uuidv4 } = require("uuid");


exports.createReport=async(req,res)=>{
    try {
    const 
    {userID,marketID,marketName,cmdtyID,priceUnit,cmdtyName,marketType,price,convFctr}=req.body.reportDetails;
  const sameMandiInDB=  await reportModel.findOne({$and:[{marketID:marketID},
        {cmdtyID:cmdtyID},{marketName:marketName}]}).exec();
        console.log(sameMandiInDB)
        if(sameMandiInDB){
            console.log('ok tested')
            const {reportID}=sameMandiInDB
            const report=new reportModel({
                userID,
                marketID,
                marketName,
                cmdtyID,
                cmdtyName,
                marketType,
                price,
                convFctr,
                reportID:reportID,
                priceUnit
        
            })
            await report.save();
            console.log(report);
            if(report){
                const {reportID}=report
                res.status(201).json({
                    Success:"true",
                    reportID
        
                })
        
            }
        }
        if(sameMandiInDB==null){
            const report=new reportModel({
                userID,
                marketID,
                marketName,
                cmdtyID,
                cmdtyName,
                marketType,
                price,
                convFctr,
                reportID:uuidv4(),
                priceUnit
        
            })
            await report.save();
            console.log(report);
            if(report){
                const {reportID}=report
                res.status(201).json({
                    Success:"true",
                    reportID
                })
        
            }

        }   
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            Success:'False',
            Mesage:'something went wrong'
        })
        
    }
    
    
    

}