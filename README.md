
# ChalkProxy

## Background

I love using chalk in projects and keeps creating a wrapper around it so I can easily call chalk.red.bold or whatever to get the result.

The idea is this allows you to create a custom wrapper for your own projects.

## Badges/Status

Travis

[![Build Status](https://travis-ci.org/cbuteau/jsigs.svg?branch=master)](https://travis-ci.org/cbuteau/chalkproxy)

npm Version

[![npm version](http://img.shields.io/npm/v/chalkproxy.svg?style=flat)](https://npmjs.org/package/chalkproxy "View this project on npm")

npm big badge

[![NPM](https://nodei.co/npm/chalkproxy.png)](https://nodei.co/npm/chalkproxy/)


## Usage

```javascript
var chalkproxy = require('chalkproxy');

var mychalk = chalkproxy.create({
    good: 'green',
    bad: 'red.bold'
  });

console.log(mychalk.good('We got this far.'));

try {
  throw new Error('Just testing')
} catch (e) {
  console.log(mychalk.bad(e.message));
}

```
