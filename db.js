const mongoose = require("mongoose");

function connectDB(){
  mongoose.connect('mongodb+srv://dilarakaracan60:dilaraa60@cluster0.qfaxlvv.mongodb.net/CarRental?retryWrites=true&w=majority');
  
  const connection = mongoose.connection;
  connection.on('connected', () => {
    console.log('Mongo DB Connection Successful');
  });
  
  connection.on('error', (err) => {
    console.error('Mongo DB Connection Error:', err);
  });
}

connectDB();
module.exports = mongoose;
