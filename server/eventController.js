const eventSchema = require('../server/eventModel')
const moment = require('moment')

exports.eventPost = async (req, res) => {
  const newEvent = new eventSchema({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    eventDate: req.body.eventDate
  });
  try{
    const eventAdd = await newEvent.save()
    eventAdd.eventDate = moment(eventAdd.eventDate).format('YYYY-MM-DD');
    res.status(201).json(eventAdd)
  } catch(err){
    res.status(401).json({message: err.message})
  }
}

exports.eventGetAll = async (req,res) => {
  try{
    const event = await eventSchema.find()
    res.status(200).json(event);
  }catch(err) {
    res.status(500).json({ message: err.message })
  }

}