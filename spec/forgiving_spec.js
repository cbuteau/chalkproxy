
var chalkproxy = require('..');
// Build test string using this so the tests pass on linux.
var style = require('ansi-styles');

var mychalk;


var GOOD_WITH_CONTROL_CODES = '[32mgood[39m';
var BAD_WITH_CONTROL_CODES = '[31m[1mbad[22m[39m';
//var UGLY_WITH_CONTROL_CODES = '[42m[94mugly[39m[49m';

var UGLY_WITH_CONTROL_CODES;
if (isWin) {
  UGLY_WITH_CONTROL_CODES = style.bgGreen.open + style.blueBright.open + 'ugly' + style.blueBright.close + style.bgGreen.close;
} else {
  UGLY_WITH_CONTROL_CODES = style.bgGreen.open + style.blue.open + 'ugly' + style.blue.close + style.bgGreen.close;
}


// The point is to forgive some extra spaces and periods...
// This test was written to improve the code.


describe('Forgiving parsing of strings to chalk functions...', function() {

  beforeAll(function() {
    mychalk = chalkproxy.create({
      good: 'green ',
      bad: 'red.bold ',
      ugly: 'bgGreen.blue.'
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
      done();
    });

    console.log(mychalk.ugly('ugly'));
  });

});
