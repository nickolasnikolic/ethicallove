var express = require('express');
var hbs = require('express-handlebars');

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//var mongoose = require('mongoose');

//var db = mongoose.connect( process.env.MONGOLAB_URI || 'mongodb://localhost/test' );

app.get('/', function(req, res){
    res.render('home');
});

app.get('/admin', function(req,res){

});

app.post('/admin', function(req, res){

});

app.listen(3000);
