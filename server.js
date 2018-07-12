const path = require('path');

// server
const port = 5000;

// express
var express = require('express');
var app = express();

// bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, './static')));


//Check the order information how you want to import and export the files!!!!!!!

// Database connection
require('./server/config/mongoose.js'); 

// models file
require('./server/models/quote.js');

// routes ==> where to find the file see below!!! - the path ;)
require('./server/config/routes.js')(app);


const server = app.listen(port)
