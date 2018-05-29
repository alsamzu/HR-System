//CREATING A READ STREAM
var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
//listing for an event
//myReadStream.on('data',function(chunk){
//    console.log('new chunk received: ');
//    console.log(chunk);
//}
);

//CREATING A WRITABLE STREAM
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//myReadStream.on('data',function(chunk){
//    console.log('new chunk received: ');
//        myWriteStream.write(chunk);
//});

//CREATING PIPES
myReadStream.pipe(myWriteStream);
