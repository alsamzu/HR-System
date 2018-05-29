// non-blocking / async code:
var fs = require('fs');

console.log('ALERT: Escape from bunny prison!');
// notice the method is called readFile not readFileSync.
fs.readFile('wishlist.html', function(err, wishlist) {
	if(err) throw err;
	console.log(wishlist.toString());
})
console.log('ALERT: Pounce owner!');
console.log('ALERT: Savagely devour rasberries!');

/* EXTRA: This method adds something new to your wishlist.html file.
Run 'node bunnyAsync.js' and see for yourself. Notice I leave this
method in blocking format otherwise, if I left in as appendFile (the
async version), the fs.readFile reads the wishlist.html file async and
then the all the ALERT's print before the appendFile method is done
processing. Thus you won't see the change taking place until you call
'node bunnyAsync.js' in your terminal again.
*/
fs.appendFileSync('wishlist.html', '6. Shout "Happy with Async!!"', 'utf8');

//SYNC METHOD
// blocking / sync code:
// you have to require the file system(fs), Node.js's core module for it to work:
//var fs = require('fs');
//
//// First read the file 'wishlist.html' synchronously using the readFileSync method:
//// We have to use the toString because it returns as a buffer.
//// You can learn about buffers in the resources I provide at the end of this article.
//var wishlist = fs.readFileSync('wishlist.html').toString();
////print the file
//console.log(wishlist);
//// Do another thing:
//console.log('ALERT: Pounce owner!!!');
