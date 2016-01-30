var express = require('express');


var app = express();

//var mongoose = require('mongoose');

//var db = mongoose.connect( process.env.MONGOLAB_URI || 'mongodb://localhost/test' );

app.get('/', function(req, res){
    res.send('goodbye handlebars.');
});


app.listen(process.env.PORT || 3000);
