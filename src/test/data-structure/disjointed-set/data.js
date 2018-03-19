/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const util = require('./../../util.js');

const ds = require(util.input.s); // user data structure
const bn = require('./../../../src/data-structure/disjointed-set/source.js'); // benchmark

describe("Disjointed Set - Data Tests", function() {
  this.timeout(60000);

  it ("stack should handle random inputs", function() {
    const N = 500;

    for (let i=0; i<100; i++) {
      ds.init(N);
      bn.init(N);

      for (let j=1; j<N; j++) {
        const c = Math.floor(Math.random() * 4);
        const n = Math.floor(Math.random() * j) - 1;

        // 25% chance to add connection
        switch (c) {
          case 0:
            ds.union(j, n);
            bn.union(j, n);
            break;
        }
      }

      assert.equal(ds.size(), bn.size());

      for (let j=1; j<N; j++) {
        const c = Math.floor(Math.random() * 2);
        const n = Math.floor(Math.random() * j) - 1;

        // 50% chance to check connection
        switch (c) {
          case 0:
            assert.equal(ds.connected(j, n), bn.connected(j, n));
            break;
        }
      }
    }
  });
});