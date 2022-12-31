require('dotenv').config()

const mongoose = require('mongoose')

module.exports = function() {

    mongoose.set('strictQuery', false)

    mongoose.connect(process.env.DB_CONNECT)
        .then(console.log('Connected to database '))
        .catch(error => console.log(error))
}