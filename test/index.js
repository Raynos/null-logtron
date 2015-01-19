'use strict';

var test = require('tape');

var nullLogtron = require('../index.js');

test('nullLogtron is a function', function t(assert) {
    assert.equal(typeof nullLogtron, 'function');
    assert.end();
});
