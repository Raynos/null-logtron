'use strict';

var test = require('tape');

var NullLogtron = require('../index.js');

test('NullLogtron is a function', function t(assert) {
    assert.equal(typeof NullLogtron, 'function');
    assert.end();
});

test('can allocate logger', function t(assert) {
    var logger = NullLogtron();

    assert.ok(logger.trace);
    assert.ok(logger.debug);
    assert.ok(logger.info);
    assert.ok(logger.warn);
    assert.ok(logger.error);
    assert.ok(logger.fatal);

    assert.end();
});

test('can call methods', function t(assert) {
    /*eslint max-statements: 0 */
    var logger = new NullLogtron();
    var msg = 'hi';
    var meta = {};

    logger.trace(msg, meta);
    logger.debug(msg, meta);
    logger.info(msg, meta);
    logger.access(msg, meta);
    logger.warn(msg, meta);
    logger.error(msg, meta);
    logger.fatal(msg, meta);

    var elements = logger.items();

    assert.equal(elements.length, 50);
    var line1 = elements[0];
    assert.equal(line1.msg, msg);
    assert.equal(line1.meta, meta);
    assert.equal(line1.level, 'trace');

    var line2 = elements[1];
    assert.equal(line2.msg, msg);
    assert.equal(line2.meta, meta);
    assert.equal(line2.level, 'debug');

    var line3 = elements[2];
    assert.equal(line3.msg, msg);
    assert.equal(line3.meta, meta);
    assert.equal(line3.level, 'info');

    var line4 = elements[3];
    assert.equal(line4.msg, msg);
    assert.equal(line4.meta, meta);
    assert.equal(line4.level, 'access');

    var line5 = elements[4];
    assert.equal(line5.msg, msg);
    assert.equal(line5.meta, meta);
    assert.equal(line5.level, 'warn');

    var line6 = elements[5];
    assert.equal(line6.msg, msg);
    assert.equal(line6.meta, meta);
    assert.equal(line6.level, 'error');

    var line7 = elements[6];
    assert.equal(line7.msg, msg);
    assert.equal(line7.meta, meta);
    assert.equal(line7.level, 'fatal');

    assert.end();
});

test('can call callback', function t(assert) {
    var logger = NullLogtron();

    logger.info('hi', {}, function onError(err) {
        assert.ifError(err);

        assert.end();
    });
});
