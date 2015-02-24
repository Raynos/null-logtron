'use strict';

var RingBuffer = require('ringbufferjs');

module.exports = NullLogtron;

function NullLogtron(capacity) {
    if (!(this instanceof NullLogtron)) {
        return new NullLogtron();
    }

    this._buffer = new RingBuffer(capacity || 50);
}

var proto = NullLogtron.prototype;

proto._log = function log(level, msg, meta, cb) {
    this._buffer.enq(
        new NullLogtronRecord(level, msg, meta)
    );
    if (typeof cb === 'function') {
        cb();
    }
};

proto.trace = function trace(msg, meta, cb) {
    this._log('trace', msg, meta, cb);
};

proto.debug = function debug(msg, meta, cb) {
    this._log('debug', msg, meta, cb);
};

proto.info = function info(msg, meta, cb) {
    this._log('info', msg, meta, cb);
};

proto.access = function access(msg, meta, cb) {
    this._log('access', msg, meta, cb);
};

proto.warn = function warn(msg, meta, cb) {
    this._log('warn', msg, meta, cb);
};

proto.error = function error(msg, meta, cb) {
    this._log('error', msg, meta, cb);
};

proto.fatal = function fatal(msg, meta, cb) {
    this._log('fatal', msg, meta, cb);
};

function NullLogtronRecord(level, msg, meta) {
    this.level = level;
    this.msg = msg;
    this.meta = meta;
}
