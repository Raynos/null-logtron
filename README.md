# null-logtron

<!--
    [![build status][build-png]][build]
    [![Coverage Status][cover-png]][cover]
    [![Davis Dependency status][dep-png]][dep]
-->

<!-- [![NPM][npm-png]][npm] -->

A logger that no-ops

## Example

```js
var NullLogtron = require("null-logtron");

var logger = NullLogtron();
logger.debug('some static string', { some: 'meta obj' })
logger.info('some static string', { some: 'meta obj' })
logger.warn('some static string', { some: 'meta obj' })
logger.error('some static string', { some: 'meta obj' })
```

The NullLogger does not write anywhere. It actually writes
  to a circular buffer in memory (pre-allocated to 50).

## Motivation

If your writing a library you want the application developer
  to pass in a logger. You cannot default a logger because that
  breaks the unix rule of silence.

So you either need a no-op logger or you need a ton of if
  statements. This is a cheap no-op logger.

I've chosen to back it by a RingBuffer so that if you do REPL
  into your process you can inspect the log statements.

The RingBuffer only holds 50 log records so the memory overhead
  is trivial.

## Docs

// TODO. State what the module does.

## Installation

`npm install null-logtron`

## Tests

`npm test`

## Contributors

 - Raynos

## MIT Licensed

  [build-png]: https://secure.travis-ci.org/Raynos/null-logtron.png
  [build]: https://travis-ci.org/Raynos/null-logtron
  [cover-png]: https://coveralls.io/repos/Raynos/null-logtron/badge.png
  [cover]: https://coveralls.io/r/Raynos/null-logtron
  [dep-png]: https://david-dm.org/Raynos/null-logtron.png
  [dep]: https://david-dm.org/Raynos/null-logtron
  [npm-png]: https://nodei.co/npm/null-logtron.png?stars&downloads
  [npm]: https://nodei.co/npm/null-logtron
