// DB connection

const path = require('path');
const fs = require('fs');

// require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotingDojo');


// You don't have to do this. You can also call every model file in the server.js!! But make sure that you have every file required!!!
// create variable to point to the models folder
// var modelsPath = path.join(__dirname, "../models");

// // that reads all the files in the modelsPath and require run for each Javascript file
// fs.readdirSync(modelsPath).forEach(function(file){
//     if (file.indexOf(".js") >= 0) {

//         // require the file (that runs the model file which registers the schema)
//         require(modelsPath + "/" + file);
//     }
// })
