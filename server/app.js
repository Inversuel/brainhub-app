const bodyParser = require('body-parser')
const eventRoute = require('./eventRoute')
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require("../server/db")

mongoose.connect();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/event', eventRoute)
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send('Something broke!')
})

module.exports = app;