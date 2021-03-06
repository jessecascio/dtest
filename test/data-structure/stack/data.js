/**
 * data test, run against random data sets
 */

const { assert, expect } = require('chai');
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/stack/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/data-structure/stack/source.js';
let bn = require(bnPath); // benchmark

describe("Stack - Data Tests", function() {
  this.timeout(60000);

  beforeEach(() => {
    reset();
  });

  it ("stack should handle random inputs", function() {
    for (let i=0; i<100; i++) {
      for (let j=0; j<25; j++) {
        const n = Math.floor(Math.random() * 100);
        const o = Math.floor(Math.random() * 5);

        switch (o) {
          case 0:
          case 1:
          case 2:
          case 3:
            ds.push(n);
            bn.push(n);
            break;
          default:
            testPop(bn, ds);
            break;
        }
      }

      testSize(bn, ds);

      if (JSON.stringify(ds.toArray()) !== JSON.stringify(bn.toArray())) {
        const o = {
          error: 'Data structure and benchmark data is not the same',
          assert: {
            fn: 'toArray',
            bn: bn.toArray(),
            ds: ds.toArray()
          }
        };
    
        const p = util.output.write(o);
        expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
      }
    }
  });
});

function reset() {
  decache(dsPath);
  ds = require(dsPath);

  bn.reset();
}

function testSize(bn, ds) {
  if (ds.size() !== bn.size()) {
    const o = {
      error: 'Data structure and benchmark sizes do not match',
      assert: {
        fn: 'size',
        bn: bn.size(),
        ds: ds.size()
      }
    }

    fail(o);
  }
}

function testPop(bn, ds) {
  const o = {
    error: 'Data structure and benchmark don\'t remove the same value',
    pre: {
      bn: clone(bn.toArray()),
      ds: clone(ds.toArray())
    }
  };

  o.assert = {
    fn: 'pop',
    bn: bn.pop(),
    ds: ds.pop()
  };

  o.post = {
    bn: clone(bn.toArray()),
    ds: clone(ds.toArray())
  };

  if (o.assert.bn !== o.assert.ds) {
    fail(o);
  }
}

function fail(o) {
  const p = util.output.write(o);
  expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
}