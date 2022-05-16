const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')


module.exports = function(app) {
    app.set('view engine', 'ejs')
    const options = {
        dotfiles: 'ignore',
        extensions: ['htm', 'html'],
        index: false,
    }
    app.use(express.static('views', options))

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use(session({
        secret: 'defal_manage',
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false }
    }))

    app.use(require('../middlewares/flash'))
}