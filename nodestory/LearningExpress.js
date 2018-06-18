var express = require('express');

var app = express();
//Hello World EXPRESS

//SETING A VIEW ENGINE

app.set('view engine', 'ejs');

//USING A MIDDLEWARE
app.use('/assets',express.static('assets'));

//RESPONDING TO A GET REQUEST
app.get('/contact',function(req,res){
    res.send('Welcome to the Contact Page');

});
//RENDERING INDEX VIEW
app.get('/',function(req,res){
    res.render('index');

});

app.get('/person/:id',function(req,res){
    res.send('You requested to see a profile with the id of '+req.params.id);

});
//RENDERING VIEWS
app.get('/profile/:name',function(req,res){
     //INSERTING MORE DATA INTO THE VIEW
    var data = {age:29,job:'Ninja',hobbies:['Eating','Fighting','Fishing']};
    res.render('profile',{person:req.params.name, data:data});


});


//SENDING A HTML PAGE
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');

});

//QUERY STRINGS
app.get('/contact',function(req,res){

    res.render('contact',{qs:req.query});

});
app.listen(3000);
