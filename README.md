
# ChalkProxy

## Background

I love using chalk in projects and keeps creating a wrapper around it so I can easily call chalk.red.bold or whatever to get the result.

The idea is this allows you to create a custom wrapper for your own projects.

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
