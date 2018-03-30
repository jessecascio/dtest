/**
 * data test, run against random data sets
 */

const { assert, expect } = require('chai');
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/binary-heap-max/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/data-structure/binary-heap-max/source.js';
let bn = require(bnPath); // benchmark

describe("Binary Max Heap - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    const N = 25;

    for (let i=0; i<500; i++) {
      reset();

      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 2);
        const n = Math.floor(Math.random() * j);

        switch (c) {
          case 0:
            ds.insert(n);
            bn.insert(n);
            break;
        }
      }

      testSize(bn, ds);
      testPeek(bn, ds);

      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 4);
        const n = Math.floor(Math.random() * j) - 1;

        switch (c) {
          case 0:
            ds.insert(n);
            bn.insert(n);
            break;
          case 1:
            testRemove(bn, ds);
            break;
        }

        testPeek(bn, ds);
        testSize(bn, ds);
      }
    }
  });
});

function reset() {
  decache(dsPath);
  ds = require(dsPath);

  decache(bnPath);
  bn = require(bnPath);
}

function fail(o) {
  const p = util.output.write(o);
  expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
}

function testPeek(bn, ds) {
  if (ds.peek() !== bn.peek()) {
    const o = {
      error: 'Data structure and benchmark peeks do not return the same value',
      pre: {
        bn: bn.toArray(),
        ds: ds.toArray()
      },
      assert: {
        fn: 'peek',
        bn: bn.peek(),
        ds: ds.peek()
      },
      post: {
        bn: bn.toArray(),
        ds: ds.toArray()
      }
    }

    fail(o);
  }
}

function testSize(bn, ds) {
  if (ds.size() !== bn.size()) {
    const o = {
      error: 'Data structure and benchmark sizes do not match',
      pre: {
        bn: bn.toArray(),
        ds: ds.toArray()
      },
      assert: {
        fn: 'size',
        bn: bn.size(),
        ds: ds.size()
      },
      post: {
        bn: bn.toArray(),
        ds: ds.toArray()
      }
    }

    fail(o);
  }
}

function testRemove(bn, ds) {
  const o = {
    error: 'Data structure and benchmark don\'t remove the same value',
    pre: {
      bn: clone(bn.toArray()),
      ds: clone(ds.toArray())
    }
  };

  o.assert = {
    fn: 'remove',
    bn: bn.remove(),
    ds: ds.remove()
  };

  o.post = {
    bn: clone(bn.toArray()),
    ds: clone(ds.toArray())
  };

  if (o.assert.bn !== o.assert.ds) {
    fail(o);
  }
}