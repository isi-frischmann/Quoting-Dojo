const path = require('path');

// server
const port = 5000;

// express
var express = require('express');
var app = express();

// bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

// require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotingDojo');

// create a new Schema quotingDojo
// User is the table
// name and quotes are the documents(rows)
var quotingDojo = new mongoose.Schema({ //quotingDojo is the Schema
    name: String,
    quote: { type: String, required: true, minlength: 1 }
}, {timestamps: true} );

mongoose.model('User', quotingDojo); //User is the collection (table)
var User = mongoose.model('User');

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, './static')));

// routing
app.get('/', function(req, res){
    res.render('index');
});

app.post('/newQuote', function(req,res){
    var newQuote = new User({ name: req.body.name, quote: req.body.quote });
    // console.log(newQuote);
    newQuote.save(function(err){
        if(err){
            for( var key in err.errors ){
                req.flash('createQuote', err.errors[key].message);
            }
            res.redirect('/');
        }
        else{
            res.redirect('/quotes')
        }
    })
})

app.get('/quotes', function(req, res){
    // console.log(newQuote);
    User.find({}, function(err, users){
        res.render('quotes', { users:users });
    }).sort({createdAt : 1});
})

const server = app.listen(port)
