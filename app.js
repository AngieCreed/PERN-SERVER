require('dotenv').config();
var express = require('express');
var app = express();
var sequelize = require('./db');
var user = require('./controllers/usercontroller');
var chem = require('./controllers/chemcontroller');
var survey = require('./controllers/surveycontroller');
var bodyParser = require('body-parser');


sequelize.sync({});


app.use(bodyParser.json());
app.use(require('./middleware/headers'));


app.use('/user', user);
app.use('/chem', chem);
app.use('/survey', survey);

app.use(require('./middleware/validate-session'));


app.listen(3003, function() {
    console.log('Angie - your App is listening on 3003')
});

// app.use('user/test', function(req, res) {
//     res.send('this is a test from the user end point on the server')
// })

