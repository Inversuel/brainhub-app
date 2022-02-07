const express = require('express')
const bodyParser = require('body-parser')
const eventRoute = require('./eventRoute')
const PORT = process.env.PORT || 4000
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://brainhub:brainhub@cluster0.rkihs.mongodb.net/brainhub?retryWrites=true&w=majority', {useNewUrlParser: true})
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Db online"));


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/event', eventRoute)
app.use((err, req, res, next) => {
   console.error(err.stack)

   res.status(500).send('Something broke!')
})
app.listen(PORT, () => console.log(`Server is running on: ${PORT}`))