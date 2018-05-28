//var events = require('events');
////Our own Events
//var myEmitter = new events.EventEmitter();
////Do something when the event occurs
////first parameter is the name of the event Second parameter is the function to run once the event is emitted
//myEmitter.on('someEvent',function(mssg){
//             console.log(mssg);
//             });
//
//myEmitter.emit('someEvent',"The event was emitted");

//UTILITY MODULE
//Util module allows us to inherit certain things build in nodeJs

var events = require('events');
var util = require('util');
//Creating a constructor
var Person = function(name){
    this.name = name;
};
//Inheriting Event emitter
util.inherits(Person,events.EventEmitter);
var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');
// Storing names into an array
var people = [james,mary,ryu];
// JS method for getting each person
people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name + ' said ' +mssg);
    });
});
james.emit('speak','hey dudes');
ryu.emit('speak','I want a curry');
