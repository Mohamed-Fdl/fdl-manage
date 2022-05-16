const mongoose = require('mongoose');

module.exports = function() {

    mongoose.connect('mongodb://localhost:27017/fdl-manage')
        .then(console.log('Connected to mongoDB '))
        .catch(error => console.log(error))
}