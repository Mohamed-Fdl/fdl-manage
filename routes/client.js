const express = require('express')
const router = express.Router()
const Plan = require('../models/plan')
const Client = require('../models/client')
const validateClient = require('../scripts/validateClient')
const validateObjectId = require('../scripts/validateObjectId')


router.get('/addClient', async function(req, res) {
    const plans = await Plan.find({});
    res.render('addClient', { plans });
});

router.post('/addClient', async function(req, res) {

    if (validateClient(req.body).error) {
        req.flash('error', validateClient(req.body).error.details[0].message)
        res.redirect('/addClient')
    } else {

        const client = await Client.create({
            name: req.body.name,
            firstname: req.body.firstname,
            email: req.body.email,
            plan: req.body.plan,
        });

        const client_id = client.id

        const plan = await Plan.findById(req.body.plan)

        plan.registered.push(client_id)

        await plan.save()


        req.flash('success', `The user  ${req.body.name} created successfully!!`)
        res.redirect('/addClient')

    }
});


router.get('/seeClients', async function(req, res) {
    const clients = await Client.find({}).populate('plan');
    res.render('clients', { clients });
});

router.get('/deleteClient/:id', async function(req, res) {
    if (!validateObjectId(req.params.id)) {
        res.status = 404
        res.send('Not found')
        return
    }
    await Client.findByIdAndRemove(req.params.id)
    res.redirect('/seeClients')
})


module.exports = router