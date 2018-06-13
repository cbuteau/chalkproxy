
var chalkproxy = require('..');

var mychalk;


var GOOD_WITH_CONTROL_CODES = '[32mgood[39m';
var BAD_WITH_CONTROL_CODES = '[31m[1mbad[22m[39m';
var UGLY_WITH_CONTROL_CODES = '[42m[94mbad[39m[49m';

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
      expect(info.indexOf('bad')).not.toBe(-1);
      expect(info).toBe(UGLY_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.ugly('bad'));
  });

});
