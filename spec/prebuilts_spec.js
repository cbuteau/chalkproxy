
var chalkproxy = require('..');

var mychalk;
var mychalk_common;

var HAPPY_WITH_CONTROL_CODES = '[32mhappy[39m';
var CRAP_WITH_CONTROL_CODES = '[31m[1mcrap[22m[39m';

var SUCCESS_WITH_CONTROL_CODES = '[32msuccess[39m';
var ERROR_WITH_CONTROL_CODES = '[31m[1merror[22m[39m';
var ATTN_WITH_CONTROL_CODES = '[36mattn[39m';

describe('PreBuilt proxies...', function() {
  beforeAll(function() {
    mychalk = chalkproxy.builtin('happycrap');
    mychalk_common = chalkproxy.builtin('common');
  });

  it ('happy', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info.indexOf('happy')).not.toBe(-1);
      expect(info).toBe(HAPPY_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.happy('happy'));
  });

  it ('crap', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info.indexOf('crap')).not.toBe(-1);
      expect(info).toBe(CRAP_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk.crap('crap'));
  });


  it ('success', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info.indexOf('success')).not.toBe(-1);
      expect(info).toBe(SUCCESS_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk_common.success('success'));
  });



  it ('error', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info.indexOf('error')).not.toBe(-1);
      expect(info).toBe(ERROR_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk_common.error('error'));
  });

  it ('attn', function(done) {
    spyOn(console, 'log').and.callFake(function(info) {
      expect(info.indexOf('attn')).not.toBe(-1);
      expect(info).toBe(ATTN_WITH_CONTROL_CODES);
      done();
    });

    console.log(mychalk_common.attn('attn'));
  });


});
