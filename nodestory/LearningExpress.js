var express = require('express');

var app = express();



//RESPONDING TO A GET REQUEST

app.get('/',function(req,res){
    res.send('Welcome to the home Page');

});
app.get('/contact',function(req,res){
    res.send('Welcome to the Contact Page');

});
app.get('/profile/:id',function(req,res){
    res.send('You requested to see a profile with the id of '+req.params.id);

});


app.listen(3000);
