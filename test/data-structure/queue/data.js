/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/queue/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/data-structure/queue/source.js';
let bn = require(bnPath); // benchmark

describe("Queue - Data Tests", function() {
  this.timeout(60000);

  beforeEach(() => {
    reset();
  });

  it ("should handle random inputs", function() {
    for (let i=0; i<200; i++) {
      for (let j=0; j<25; j++) {
        const n = Math.floor(Math.random() * 100);
        const o = Math.floor(Math.random() * 5);

        switch (o) {
          case 0:
          case 1:
          case 2:
          case 3:
            ds.enqueue(n);
            bn.enqueue(n);
            break;
          default:
            testDequeue(bn, ds);
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

  decache(bnPath);
  bn = require(bnPath);
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

function testDequeue(bn, ds) {
  const o = {
    error: 'Data structure and benchmark don\'t remove the same value',
    pre: {
      bn: clone(bn.toArray()),
      ds: clone(ds.toArray())
    }
  };

  o.assert = {
    fn: 'dequeue',
    bn: bn.dequeue(),
    ds: ds.dequeue()
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