// That's who is just doing the routing

// That belongs to the functionallity ==> The file in the controller (quotes.js);
var quotes = require('../controllers/quotes.js')


module.exports = function(app){

    // INDEX
    app.get('/', function(req, res){
        // function found in the controller file (quotes.js)
        // the quotes belongs to the file and the indexRouting matches the naming in the quotes.js file
        quotes.indexRouting(req,res);
    });

    // POST ROUTING FOR A NEW QUOTE
    app.post('/newQuote', function(req,res){
        quotes.newQuotePost(req, res);
    })

    // OPEN THE QUOTE PAGE
    app.get('/quotes', function(req, res){
        quotes.allQuotes(req, res);
    })

    // THE PAGE FOR THE INFO ABOUT A SPECIFIC ANIMAL
    app.get('/info', function(req, res){
        quotes.specificQuote(req, res);
    })

}