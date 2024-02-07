const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())

app.get(
    '/',
    (req, res) => res.status(200).json({
        message: "Welcome to the Points API!",
        description: "An API that stores information on points awarded to (or deducted from!) Fossians.",
        endpoints: [
            { method: 'GET', path: '/', success_status: '200' }
        ]
    })
)

module.exports = app