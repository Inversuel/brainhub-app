const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: [true, 'This is required.']
  },
  lastName: {
    type: String,
    required: [true, 'This is required.']
  },
  email: {
    type: String,
    required: [true, 'This is required.']
  },
  eventDate: {
    type: Date,
    required: [true, 'This is required.']
  }
})

module.exports = mongoose.model("event", eventSchema);