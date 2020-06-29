const mongoose = require('mongoose');

var mongoServiceName = process.env.DATABASE_SERVICE_NAME,
    mongoDatabase = process.env.MONGODB_DATABASE,
    mongoPassword = process.env.MONGODB_PASSWORD,
    mongoUser = process.env.MONGODB_USER;

if (process.env.DATABASE_SERVICE_NAME) {
  var mongodburl = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoServiceName +':27017/' + mongoDatabase;
} else {
  var mongodburl = 'mongodb://' + mongoUser + ':' + mongoPassword + '@127.0.0.1:27017/' + mongoDatabase;
}

console.log(mongodburl)


mongoose.connect(mongodburl, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
