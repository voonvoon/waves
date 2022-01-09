const { check, validationResult } = require('express-validator');
const httpStatus = require('http-status');

const addProductValidator = [
    check('model')
        .trim().not().isEmpty().withMessage('You need need to add a model sweetie!').bail()
        .isLength({min:3}).withMessage('minimum 3 character is required!').bail(),
    check('brand')
        .trim().not().isEmpty().withMessage('You need to add a brand sweetie!'),
    (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(httpStatus.BAD_REQUEST).json({
                errors: errors.array()
            })
        }
        next();
    }
];

module.exports = {
    addProductValidator
}