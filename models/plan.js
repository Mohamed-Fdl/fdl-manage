const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    registered: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Client',
    }
});

const Plan = mongoose.model('Plan', PlanSchema);

module.exports = Plan