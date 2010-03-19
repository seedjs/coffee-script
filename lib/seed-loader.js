// Adapted loader for building coffee script

var CoffeeScript = require('./coffee-script');
var Loader       = require('seed:loader').Loader;

var CoffeeLoader = Loader.extend({
  
  evaluate: function(text, desc, done) {
    // convert text to JS
    text = '"import sys";\n'+CoffeeScript.compile(text, { 
      no_wrap: true,
      source: desc.path 
    });
    
    Loader.prototype.evaluate.call(this, text, desc, done);
  },
  
  // coffeescript doesn't know anything about pragmas
  usePragmas: true
  
});

exports.CoffeeLoader = CoffeeLoader;
exports.loader = new CoffeeLoader();
exports.loadModule = function(desc, done) {
  return exports.loader.loadModule(desc, done);
};
