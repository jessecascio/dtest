/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/disjointed-set/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/data-structure/disjointed-set/source.js';
let bn = require(bnPath); // benchmark

describe("Disjointed Set - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    const N = 25;

    for (let i=0; i<200; i++) {
      reset();

      ds.init(N);
      bn.init(N);

      for (let j=1; j<N; j++) {
        const c = Math.floor(Math.random() * 2);
        const n = Math.floor(Math.random() * j);

        switch (c) {
          case 0:
            ds.union(j, n);
            bn.union(j, n);
            break;
        }

        testSize(bn, ds);
      }

      for (let j=1; j<N; j++) {
        const n = Math.floor(Math.random() * j);
        testConnected(bn, ds, j, n);
      }
    }
  });
});

function fail(o) {
  const p = util.output.write(o);
  expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
}

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

function testConnected(bn, ds, j, n) {
  if (ds.connected(j,n) !== bn.connected(j,n)) {
    const o = {
      error: 'Data structure and benchmark connected do not match',
      pre: {
        bn: bn.toArray(),
        ds: ds.toArray()
      },
      assert: {
        fn: 'connected',
        ps: [j,n],
        bn: bn.connected(j,n),
        ds: ds.connected(j,n)
      },
      post: {
        bn: bn.toArray(),
        ds: ds.toArray()
      }
    }

    fail(o);
  }
}