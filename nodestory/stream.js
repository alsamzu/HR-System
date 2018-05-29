//CREATING A READ STREAM
var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(_dirname +'/readme.txt');
