

var chalk = require('chalk');

function findChalkFunc(chalkString) {
  var result = chalk;
  var chunks = chalkString.split('.');
  // look up each chalk function by name.
  for (var i = 0; i < chunks.length; i++) {
    var current = chunks[i];
    // Allow extra periods and accidental whitepace...
    if (current && current.length) {
      current = current.trim();
      result = result[current];
    }
  }
  return result;
}


module.exports = {
  create: function(config) {
    var keys = Object.keys(config);
    var result = {};
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      result[key] = findChalkFunc(config[key]);
    }
    return result;
  },
  builtin: function(name) {
    switch (name) {
      case 'happycrap':
        return this.create({
          happy: 'green',
          crap: 'red.bold'
        });
        break;
      case 'common':
        return this.create({
          success: 'green',
          error: 'red.bold',
          attn: 'cyan'
        });
        break;
    }
  }};
