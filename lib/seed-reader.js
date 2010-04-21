// Adapted loader for building coffee script

var CoffeeScript = require('./coffee-script');
var Factory      = require('seed:reader').Factory;

var sys = require('default:sys');

var CoffeeFactory = Factory.extend();
CoffeeFactory.prototype.prepare = function(text) {
  // convert text to JS
  var imports = ['import default:sys', 'import default:path as path'];
  imports = '"'+imports.join('";\n"')+'";\n';
  text = imports+CoffeeScript.compile(text, { 
    no_wrap: true,
    source: this.path 
  });
  
  return text;
};

exports.CoffeeFactory = CoffeeFactory;
exports.loadModule = function(opts) {
  return new CoffeeFactory(opts);
};
