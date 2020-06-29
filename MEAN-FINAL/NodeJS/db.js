const mongoose = require('mongoose');

//const dbHost = 'mongodb://database/CrudDB';
//'mongodb://localhost:27017/CrudDB'

var connection_string = '127.0.0.1:27017/YOUR_APP_NAME';
  // if OPENSHIFT env variables are present, use the available connection info:
  if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;
  };
  //Connect to mongodb using mongoose library

mongoose.connect(connection_string, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
