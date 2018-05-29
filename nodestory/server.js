var http = require('http'); // required for all steps.
var fs = require('fs'); // we need this module for Step #1.5.

// STEP #1 Basic server:
http.createServer(function(request,response) {
	response.writeHead(200); // Tell the client if response is good.
	response.write('My server worked!'); // the response body
    //USING PIPIS TO DISPLAY MESSAGE
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
    myReadStream.pipe(response);



	//response.end();
    // end the connection.
}).listen(3000);
// you can change this to another port if you want, but then you would have to visit that port in the browser too.

 //SERVING HTML FILES
var http = require('http');
var fs = require('fs');
http.createServer(function(request,response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
 //USING PIPIS TO DISPLAY MESSAGE
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(response);

}).listen(3000,'127.0.0.1');


//SERVING JSON FILES
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response) {
	response.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'Zuu',
        job: 'Ninja',
        age: 32
    };
 response.end(JSON.stringify(myobj));

});



