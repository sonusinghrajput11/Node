const Joi = require('joi');

exports.valiadte = function (product) {
    //Schema is an object which cotains validation rules
    const schema = {
        _id: Joi.string().allow('').optional(),
        name: Joi.string().min(3).required(),
        price: Joi.number().min(1).required(),
        __v: Joi.number().allow(0).optional()
    };

    return Joi.validate(product, schema);
}