const express = require('express')
const router = express.Router()
const Plan = require('../models/plan')
const validatePlan = require('../scripts/validatePlan')
const validateObjectId = require('../scripts/validateObjectId')

router.get('/addPlan', function(req, res) {
    res.render('addPlan');
});

router.get('/plans', async function(req, res) {
    const plans = await Plan.find({});
    res.render('seePlans', { plans });
});


router.post('/addPlan', async function(req, res) {

    if (validatePlan(req.body).error) {
        req.flash('error', validatePlan(req.body).error.details[0].message)
        res.redirect('/addPlan')
    } else {
        const options = req.body.options
        await Plan.create({
            name: req.body.name,
            price: req.body.price,
            options: options.split(',')
        });

        req.flash('success', `Plan ${req.body.name} created successfully!!`)
        res.redirect('/addPlan')

    }
});


router.get('/editPlan/:id', async function(req, res) {
    if (!validateObjectId(req.params.id)) {
        res.status = 404
        res.send('Not found')
        return
    }
    const plan = await Plan.findById(req.params.id);
    res.render('editPlan', { plan });

});


router.post('/editPlan/:id', async function(req, res) {
    if (!validateObjectId(req.params.id)) {
        res.status = 404
        res.send('Not found')
        return
    }
    if (validatePlan(req.body).error) {
        req.flash('error', validatePlan(req.body).error.details[0].message)
        res.redirect('/editPlan/' + req.params.id)
        return
    } else {
        const options = req.body.options

        await Plan.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            options: options.split(',')
        })

        req.flash('success', `Plan ${req.body.name} updated successfully!!`)
        res.redirect('/plans')
    }

});

router.get('/deletePlan/:id', async function(req, res) {
    if (!validateObjectId(req.params.id)) {
        res.status = 404
        res.send('Not found')
        return
    }
    await Plan.findByIdAndRemove(req.params.id)
    res.redirect('/plans')
})

module.exports = router