const Joi = require('joi');

module.exports = function(plan) {
    const planSchema = Joi.object({
        name: Joi.string().alphanum().required(),
        price: Joi.number().required(),
        options: Joi.string().required()
    })

    return planSchema.validate(plan)
}