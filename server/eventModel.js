const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  firstName:{
    type: String,
    validate: {
      validator: function(v) {
        return /[^a-zA-Z\d\s:]/.test(v);
      },
      message: props => `${props.value} is not a valid name. No special character!`
    },
    required: [true, 'This is required.']
  },
  lastName: {
    type: String,
    validate: {
      validator: function(v) {
        return /[^a-zA-Z\d\s:]/.test(v);
      },
      message: props => `${props.value} is not a valid name. No special character!`
    },
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