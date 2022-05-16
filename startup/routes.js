const plans = require('../routes/plan')
const home = require('../routes/home')
const clients = require('../routes/client')

module.exports = function(app) {
    app.use('/', plans)

    app.use('/', clients)

    app.use('/', home)
}