var express = require('express');
var app = express();

// An example middleware function
var a_middleware_function = function(req, res, next) {
  // ... perform some operations
  next();
    // Call next() so Express will call the next middleware function in the chain.
}
