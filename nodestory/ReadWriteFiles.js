var fs = require('fs');
//Method to read files
//It is  synchronuos method it blocks any code below it until it is executed fully
var readMe = fs.readFileSync('readme.txt','utf8');
console.log(readMe);

//Writing into a file
var writeMe = fs.writeFileSync('writeme.txt',readMe +'Yeeeey');

//Asynchronous read file
//err for any error
fs.readFile('readme.txt','utf8', function(err,data){
    console.log(data);
});
//Asynchronous write file
//var writeMe = fs.writeFile('writeme.txt',readMe +'Yeeeey');
//DELETING FILES
//fs.unlink('writeme.txt');
