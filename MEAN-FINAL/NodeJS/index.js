const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://mean-seb-git-nirubanmeanstacktest3.apps.cluster3.openshift3.iets.com' }));


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, ip, () => console.log('Server started at port : '+port+" IP"+ ip));

app.use('/employees', employeeController);

module.exports = app;
