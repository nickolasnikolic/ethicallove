var express = require('express');
var hbs = require('express-handlebars');
var bp = require('body-parser');

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mongoose = require('mongoose');

mongoose.connect( process.env.MONGOLAB_URI || 'mongodb://localhost/test' );

var postSchema = mongoose.Schema({
    title: String,
    body: String
});

var post = mongoose.model('post', postSchema);

app.use(express.static('public'));

app.get('/', function(req, res){

    post.find(function( err, posts ){
        res.render('home', { post: posts } );
    });

});

app.get('/admin', function(req,res){
    res.render('admin');
});

app.use(bp.urlencoded());

app.post('/admin', function(req, res){

    var p = new post({ title: req.body.title, body: req.body.body });
    p.save(function(){
        res.redirect('/');
    });

});

app.listen(process.env.PORT || 3000);