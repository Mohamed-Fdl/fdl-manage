require('dotenv').config()

const express = require('express')
const router = express.Router()

const validateLoger = require('../scripts/validateLoger')

router.get('/', function(req, res) {
    res.render('template')
})

router.get('/login', function(req, res) {
    res.render('login')
})

router.post('/login', function(req, res) {

    if (validateLoger(req.body).error) {
        req.flash('error', validateLoger(req.body).error.details[0].message)
        res.redirect('/login')

    } else {
        const { username, password } = req.body

        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {

            req.session.connexion = { status: true, message: 'User connected' }

            req.flash('success', 'Successfully logged')

            res.redirect('/')

        } else {
            req.flash('error', 'Invalid credentials')
            res.redirect('/login')
        }
    }
})


module.exports = router