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
app.get('/person/:id',function(req,res){
    res.send('You requested to see a profile with the id of '+req.params.id);

});
//RENDERING VIEWS
app.get('/profile/:name',function(req,res){
     //INSERTING MORE DATA INTO THE VIEW
    var data = {age:29,job:'ninja'};
    res.render('profile',{person:req.params.name, data:data});


});


//SENDING A HTML PAGE
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');

});

app.listen(3000);
