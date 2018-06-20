var express = require('express');

var app = express();
//Hello World EXPRESS

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


//SETING A VIEW ENGINE

app.set('view engine', 'ejs');

//USING A MIDDLEWARE
app.use('/assets', express.static('assets'));

//RESPONDING TO A GET REQUEST
app.get('/contact', function (req, res) {
    res.send('Welcome to the Contact Page');

});
//RENDERING INDEX VIEW
app.get('/', function (req, res) {
    res.render('index');

});

app.get('/person/:id', function (req, res) {
    res.send('You requested to see a profile with the id of ' + req.params.id);

});
//RENDERING VIEWS
app.get('/profile/:name', function (req, res) {
    //INSERTING MORE DATA INTO THE VIEW
    var data = {
        age: 29,
        job: 'Ninja',
        hobbies: ['Eating', 'Fighting', 'Fishing']
    };
    res.render('profile', {
        person: req.params.name,
        data: data
    });


});


//SENDING A HTML PAGE
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

});

//QUERY STRINGS
app.get('/contact', function (req, res) {

    res.render('contact', {
        qs: req.query
    });

});

// wiki.js - Wiki route module

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function (req, res) {
    res.send('Wiki home page');
});

// About page route
router.get('/about', function (req, res) {
    res.send('About this wiki');
});

module.exports = router;
app.listen(3000);
