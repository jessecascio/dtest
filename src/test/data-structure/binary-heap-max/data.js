/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const util = require('./../../util.js');

const ds = require(util.input.s); // user data structure
const bn = require('./../../../data-structure/binary-heap-max/source.js'); // benchmark

describe("Binary Max Heap - Data Tests", function() {
  this.timeout(60000);

  it ("heap should handle random inputs", function() {
    const N = 100;

    for (let i=0; i<100; i++) {
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

      assert.equal(ds.size(), bn.size());
      assert.equal(ds.isEmpty(), bn.isEmpty());
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify(bn.toArray()));

      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 6);
        const n = Math.floor(Math.random() * j) - 1;

        switch (c) {
          case 0:
            assert.equal(ds.peek(), bn.peek());
            break;
          case 1:
            assert.equal(ds.insert(n), bn.insert(n));
            break;
          case 2:
            assert.equal(ds.remove(), bn.remove());
            break;
        }

        assert.equal(ds.size(), bn.size());
        assert.equal(JSON.stringify(ds.toArray()), JSON.stringify(bn.toArray()));
      }
    }
  });
});