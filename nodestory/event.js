var events = require('events');
//Our own Events
var myEmitter = new events.EventEmitter();
//Do something when the event occurs
myEmitter.on('someEvent',function(mssg){
             console.log(mssg);
             });

myEmitter.emit('someEvent',"The event was emitted");
