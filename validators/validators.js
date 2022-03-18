const  {body,validationResult}=require('express-validator');

//wrong validation  messages while creating reportgjyh

exports.reportValidation=[
    body('reportDetails.userID')
    .notEmpty()
    .withMessage('userID is required')
    .isString()
    .withMessage('userID must be string'),
    body('reportDetails.marketID')
    .notEmpty()
    .withMessage('marketID is required')
    .isString()
    .withMessage('marketID must be string'),
    body('reportDetails.marketName')
    .notEmpty()
    .withMessage('marketName is required')
    .isString()
    .withMessage('marketName must be string'),
    body('reportDetails.cmdtyID')
    .notEmpty()
    .withMessage('cmdtyID is required')
    .isString()
    .withMessage('cmdtyID must be string'),
     body('reportDetails.cmdtyName')
     .notEmpty()
    .withMessage('cmdtyName is required')
    .isString()
    .withMessage('cmdtyName must be string'),
    body('reportDetails.marketType')
    .notEmpty()
    .withMessage('marketType is required')
    .isString()
    .withMessage('marketType must be string'),
    body('reportDetails.priceUnit')
     .notEmpty()
    .withMessage(' priceUnit is required')
    .isString()
    .withMessage(' priceUnit must be string'),
    body('reportDetails.price')
    .notEmpty()
    .withMessage('price  is required'),
    body('reportDetails.convFctr')
    .notEmpty()
    .withMessage(' convFctr  is required') 
];


//validation messages (occur only if there is wrong validation)
exports.agregateReportValidation=[
    body('cmdtyID')
    .notEmpty()
    .withMessage('cmdtyID is required')
    .isString()
    .withMessage('cmdtyID must be string'),
    body('reportID')
    .notEmpty()
    .withMessage('reportID is required')
    .isString()
    .withMessage('reportID must be string'),
];



//giving validation messages as response if there is wrong validation
exports.Validator=  (req,res,next)=> {const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg })
}
next();
}