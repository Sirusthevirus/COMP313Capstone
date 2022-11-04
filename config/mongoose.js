// Load the module dependencies:
//  config.js module and mongoose module
var config = require('./config'),
    mongoose = require('mongoose');
// Define the Mongoose configuration method
module.exports = function () {
  // Use Mongoose to connect to MongoDB
  const db = mongoose.connect('mongodb://127.0.0.1/', {
      useUnifiedTopology: true,
      useNewUrlParser: true, useCreateIndex: true 
      }).then(() => console.log('DB Connected!'))
  .catch(
    (err)=> console.error(err)
);

    // Load the 'Student' model 
    //require('../app/models/student.server.model');
    require('../app/models/material.server.model');
    // Return the Mongoose connection instance
    return db;
};