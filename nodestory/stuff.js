//module.exports.counter = function(arr){
//    return "There are "+arr.length+" elements in this array";
//};
//
//module.exports.adder = function(a,b){
//    return `The sum of the 2 numbers is ${a+b}`;
//}
//another module pattern to export our data
var pi = function(c,d){
    return`pi is ${c-d}`;
}
module.exports={
    pi:pi
};
