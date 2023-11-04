const mongoose = require("mongoose");

function connectDB(){
  //mongoose.connect('');add your url
  
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
