// File for our DB ==> MODELS
// This file needs to be named singular and the file in the controller is plural!

var mongoose = require('mongoose');

    // create a new Schema quotingDojo
    // User is the table
    // name and quotes are the documents(rows)
    var quotingDojo = new mongoose.Schema({ //quotingDojo is the Schema
        name: String,
        quote: { type: String, required: true, minlength: 1 }
    }, { imestamps: true } );

    mongoose.model('User', quotingDojo); //User is the collection (table)
