const mongoose = require('mongoose');
const Model = require('./eventModel');

module.exports.connect = async () => {
  const uri = 'mongodb+srv://brainhub:brainhub@cluster0.rkihs.mongodb.net/brainHub?retryWrites=true&w=majority';
  const mongooseOptions =  {
    useNewUrlParser: true,
  }
  await mongoose.connect(uri, mongooseOptions)
}

module.exports.closeDatabase = async () => {
  await mongoose.connection.close();
}

module.exports.clearDatabase = async () => {
  await Model.deleteMany();
}