//ROUTING
var http = require('http');
var fs = require('fs');
var server= http.createServer(function(request,response) {
    console.log('request was made: '+request.url);
    //Checking what user has requested and sending them data based on the request

    if(request.url === '/home' || request.url === '/'){
        //if they request home/local host we send them //the index file
        response.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    }
   // DIFFERENT PAGE
    else if (request.url === '/contact'){
        response.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(response);
    }
    //SENDING JSON OR API ENDPOINT
    else if(request.url === '/app/ninjas'){
        var ninjas = [{
            name:'Zuu',
            age:3
        },{name:'Yoshi',age:2}];
        response.writeHead(200,{'Content-Type': 'application/json'});
        response.end(JSON.stringify(ninjas))

    }
    else{
         response.writeHead(404,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(response);
    }


}).listen(3000,'127.0.0.1');
console.log('NodeJs :(');


