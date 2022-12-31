const Joi = require('joi');

module.exports = function(loger) {
    const logerSchema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    })

    return logerSchema.validate(loger)
}