const express=require('express');
const router=express.Router();
const {createAgregateReport,agregateReport}=require('../controllers/agregateReport');
const {agregateReportValidation,Validator}=require('../validators/validators');

router.get('/reports',agregateReport)
router.post('/agregateReports',agregateReportValidation,Validator,createAgregateReport)

module.exports=router;