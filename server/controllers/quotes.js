// That's who handels the functionallity ==> CONTROLLER
// The folder name needs to be pluralized from the model file. 

// As we are using the Model here we have to import the model as well!
var mongoose = require('mongoose');
var User = mongoose.model('User');



module.exports = {
    
    // FUNCTIONALLITY FROM THE INDEX PAGE
    indexRouting: function(req, res){
        res.render('index');
    },

    newQuotePost: function(req,res){
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
    },

    allQuotes: function(req, res){
        // console.log(newQuote);
        User.find({}, function(err, users){
            res.render('quotes', { users:users });
        }).sort({createdAt : 1});
    },

    specificQuote: function(req, res){
        res.render('animalInfo');
    }

}
