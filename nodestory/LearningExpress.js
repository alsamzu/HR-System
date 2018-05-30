var express = require('express');

var app = express();

//SETING A VIEW ENGINE

app.set('view engine', 'ejs');

//RESPONDING TO A GET REQUEST

app.get('/about',function(req,res){
    res.send('Welcome to the about Page');

});
app.get('/contact',function(req,res){
    res.send('Welcome to the Contact Page');

});
app.get('/profile/:id',function(req,res){
    res.send('You requested to see a profile with the id of '+req.params.id);

});


//SENDING A HTML PAGE
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');

});

app.listen(3000);
