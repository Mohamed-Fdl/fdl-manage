const express = require('express')
const app = express()


require('./startup/db')()
require('./startup/prod')(app)
require('./startup/routes')(app)

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Listening on port ${port}...`))
    // > et <