require('dotenv').config();
var express = require('express');
var app = express();
var sequelize = require('./db');
var user = require('./controllers/usercontroller');
var chem = require('./controllers/chemcontroller');
var survey = require('./controllers/surveycontroller');
var bodyParser = require('body-parser');


sequelize.sync();


app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/user', user);
app.use('/chem', chem);
app.use('/survey', survey);




app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`)
})
