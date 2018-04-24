/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/trie/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/data-structure/trie/source.js';
let bn = require(bnPath); // benchmark

describe("Trie - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    const N = 25;

    for (let i=0; i<100; i++) {
      let strs = [];
      reset();
      
      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 15);
        const s = Math.random().toString(36).replace(/[0-9.]/gi, '').substring(c);

        if (!s.length) {
          continue;
        }

        strs.push(s);

        ds.put(s, c);
        bn.put(s, c);
      }

      testSize(bn, ds);

      for (let j=0; j<strs.length; j++) {
        const c = Math.floor(Math.random() * 6);
        const s = Math.random().toString(36).replace(/[0-9.]/gi, '');

        switch (c) {
          case 0:
            testContains(bn, ds, strs[j]);
            break;
          case 1:
            testContains(bn, ds, s);
            break;
          case 2:
            const pre = s.substring(15);

            if (pre.length) {
              testKeysWithPrefix(bn, ds, pre);
            }
            
            break;
          case 3:
            ds.remove(strs[j]);
            bn.remove(strs[j]);
            break;
          case 4:
            testGet(bn, ds, strs[j]);
            break;
          case 5:
            ds.put(s, c);
            bn.put(s, c);
            break;
        }

        testSize(bn, ds);
      }
    }
  });
});

function reset() {
  decache(dsPath);
  ds = require(dsPath);

  bn.reset();
}

function fail(o) {
  const p = util.output.write(o);
  expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
}

function testSize(bn, ds) {
  if (ds.size() !== bn.size()) {
    const o = {
      error: 'Data structure and benchmark sizes do not match',
      pre: {
        bn: bn.toJson(),
        ds: ds.toJson()
      },
      assert: {
        fn: 'size',
        bn: bn.size(),
        ds: ds.size()
      },
      post: {
        bn: bn.toJson(),
        ds: ds.toJson()
      }
    }

    fail(o);
  }
}

function testContains(bn, ds, v) {
  if (ds.contains(v) !== bn.contains(v)) {
    const o = {
      error: 'Data structure and benchmark don\'t return same value for contains',
      pre: {
        bn: bn.toJson(),
        ds: ds.toJson()
      },
      assert: {
        fn: 'contains',
        ps: [v],
        bn: bn.contains(v),
        ds: ds.contains(v)
      },
      post: {
        bn: bn.toJson(),
        ds: ds.toJson()
      }
    }

    fail(o);
  }
}

function testGet(bn, ds, v) {
  if (ds.get(v) !== bn.get(v)) {
    const o = {
      error: 'Data structure and benchmark don\'t return same value for get',
      pre: {
        bn: bn.toJson(),
        ds: ds.toJson()
      },
      assert: {
        fn: 'get',
        ps: [v],
        bn: bn.get(v),
        ds: ds.get(v)
      },
      post: {
        bn: bn.toJson(),
        ds: ds.toJson()
      }
    }

    fail(o);
  }
}

function testKeysWithPrefix(bn, ds, v) {
  const p1 = ds.keysWithPrefix(v);
  const p2 = bn.keysWithPrefix(v);

  if (p1.length !== p2.length) {
    const o = {
      error: 'Data structure and benchmark don\'t return same value for keysWithPrefix',
      pre: {
        bn: bn.toJson(),
        ds: ds.toJson()
      },
      assert: {
        fn: 'keysWithPrefix',
        ps: [v],
        bn: bn.keysWithPrefix(v),
        ds: ds.keysWithPrefix(v)
      },
      post: {
        bn: bn.toJson(),
        ds: ds.toJson()
      }
    }

    fail(o);
  }
}