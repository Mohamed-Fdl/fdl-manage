const mongoose = require('mongoose');

const Plan = require('./plan')

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
    }
});

ClientSchema.methods.getPlanName = function() {
    return this.plan
}
const Client = mongoose.model('Client', ClientSchema);

module.exports = Client