var fs = require('fs');
// SYNC METHOD FOR CREATING A DIRECTORY
//fs.mkdirSync('newDir');
//REMOVING DIR
//fs.rmdirSync('newDir');

//ASYNC METHOD
//fs.mkdir('newDir',function(){
//fs.readFile('readme.txt','utf8',function(err, data){
//    fs.writeFile('./newDir/writeMe.txt',data);
//});
//});

//DELETING DIR ASYNC
//We cant remove a dir if it is not empty
//we first remove the files inside
fs.unlink('./newDir/writeMe.txt',function(){
    fs.rmdir('newDir');
})
