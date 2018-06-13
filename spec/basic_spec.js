
var chalkproxy = require('..');

// Build test string using this so the tests pass on linux.
var style = require('ansi-styles');

var mychalk;

var GOOD_WITH_CONTROL_CODES = '[32mgood[39m';
var BAD_WITH_CONTROL_CODES = '[31m[1mbad[22m[39m';
var UGLY_WITH_CONTROL_CODES = style.bgGreen.open + style.blueBright.open + 'ugly' + style.blueBright.close + style.bgGreen.close;

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
      expect(info.indexOf('good')).not.toBe(-1);
      expect(info).toBe(GOOD_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.good('good'));
  });

  it ('Bad', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info.indexOf('bad')).not.toBe(-1);
      expect(info).toBe(BAD_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.bad('bad'));
  });

  it ('Ugly', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info.indexOf('ugly')).not.toBe(-1);
      for (var i = 0; i < info.length; i++) {
        if (info.charAt(i) !== UGLY_WITH_CONTROL_CODES.charAt(i)) {
          console.log('index:' + i);
        }
      }
      expect(info).toBe(UGLY_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.ugly('ugly'));
  });

});
