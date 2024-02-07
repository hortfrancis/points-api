const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())

app.get(
    '/',
    (req, res) => res.status(200).send()
)

module.exports = app