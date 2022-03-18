const express=require('express');
const router=express.Router();
const {createReport}=require('../controllers/report');
const {reportValidation,Validator}=require('../validators/validators');

router.post('/reports',reportValidation,Validator,createReport)


module.exports=router;