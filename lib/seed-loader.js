// Adapted loader for building coffee script

var CoffeeScript = require('./coffee-script');
var Factory      = require('seed:reader').Factory;

var CoffeeFactory = Factory.extend();
CoffeeFactory.prototype.prepare = function(text) {
  // convert text to JS
  text = '"import sys";\n'+CoffeeScript.compile(text, { 
    no_wrap: true,
    source: this.path 
  });
  return text;
};

exports.CoffeeFactory = CoffeeFactory;
exports.loadModule = function(opts) {
  return new CoffeeFactory(opts);
};
