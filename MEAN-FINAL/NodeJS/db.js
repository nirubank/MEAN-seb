const mongoose = require('mongoose');

//const dbHost = 'mongodb://database/CrudDB';
//'mongodb://localhost:27017/CrudDB'


mongoose.connect('mongodb://database/CrudDB', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;