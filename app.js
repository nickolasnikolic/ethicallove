var express = require('express');
var hbs = require('express-handlebars');
var bp = require('body-parser');

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mongoose = require('mongoose');

var db = mongoose.connect( process.env.MONGOLAB_URI || 'mongodb://localhost/test' );

app.get('/', function(req, res){
    res.render('home',{ 'post': [{'title': "we didn't start the fire", 'body': "it's been always burning since the world's been turning..."},{'title': "we didn't start the fire", 'body': "it's been always burning since the world's been turning..."}] });
});

app.get('/admin', function(req,res){

});

app.post('/admin', function(req, res){

});

app.listen(process.env.PORT || 3000);
