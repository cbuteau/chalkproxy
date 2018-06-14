
var chalkproxy = require('..');

// Build test string using this so the tests pass on linux.
var style = require('ansi-styles');

var mychalk;

var oldconsoleLog = console.log;

function compareStrings(stringOne, stringTwo) {
  var len = stringOne.length;
  if (stringOne.length !== stringTwo.length) {
    oldconsoleLog('They are unequal length');
    len = Math.min(stringOne.length, stringTwo.length);
  } else {
    oldconsoleLog('congradulations they are the same length');
  }

  for (var i = 0; i < len; i++) {
    var charOne = stringOne.charAt(i);
    var charTwo = stringTwo.charAt(i);
    if (charOne !== charTwo) {
      oldconsoleLog('char not equal 1:' + charOne + ' 2:' + charTwo);
    }
  }
}

var GOOD_WITH_CONTROL_CODES = '[32mgood[39m';
var BAD_WITH_CONTROL_CODES = '[31m[1mbad[22m[39m';
var isWin = process.platform === 'win32';
var UGLY_WITH_CONTROL_CODES;
if (isWin) {
  UGLY_WITH_CONTROL_CODES = style.bgGreen.open + style.blueBright.open + 'ugly' + style.blueBright.close + style.bgGreen.close;
} else {
  UGLY_WITH_CONTROL_CODES = style.bgGreen.open + style.blue.open + 'ugly' + style.blue.close + style.bgGreen.close;  
}

// var UGLY_WITH_CONTROL_CODES;
// try {
//   UGLY_WITH_CONTROL_CODES = style.bgGreen.open + style.blueBright.open + 'ugly' + style.blueBright.close + style.bgGreen.close;
// } catch (e) {
//   UGLY_WITH_CONTROL_CODES = '[42m[94mugly[39m[49m';
// }

describe('Basic Tests...', function() {
  beforeAll(function() {
    mychalk = chalkproxy.create({
      good: 'green',
      bad: 'red.bold',
      ugly: 'bgGreen.blue'
    });
  });

  it ('good', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info).toBe(GOOD_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.good('good'));
  });

  it ('Bad', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info).toBe(BAD_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.bad('bad'));
  });

  it ('Ugly', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info).toBe(UGLY_WITH_CONTROL_CODES);
      compareStrings(info, UGLY_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.ugly('ugly'));
  });

});
