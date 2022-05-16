const Joi = require('joi');

module.exports = function(client) {
    const clientSchema = Joi.object({
        name: Joi.string().alphanum().required(),
        firstname: Joi.string().alphanum().required(),
        email: Joi.string().email().required(),
        plan: Joi.string()
    })

    return clientSchema.validate(client)
}