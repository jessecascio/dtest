/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const util = require('./../../util.js');

const ds = require(util.input.s); // user data structure
const bn = require('./../../../src/data-structure/graph-undirected/source.js'); // benchmark

describe("Undirected Graph - Data Tests", function() {
  this.timeout(60000);

  it ("graph should handle random inputs", function() {
    const N = 500;

    for (let i=0; i<200; i++) {
      ds.clear();
      bn.clear();

      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 2);
        
        const v = Math.floor(Math.random() * N);
        const w = Math.floor(Math.random() * N);

        ds.addVertice(v);
        ds.addVertice(w);
        bn.addVertice(v);
        bn.addVertice(w);

        switch (c) {
          case 0:
            ds.addEdge(v, w);
            bn.addEdge(v, w);
            break;
        }
      }

      assert.equal(ds.size(), bn.size(), "Wrong Size");
      assert.equal(ds.components(), bn.components(), "Wrong Components");
      assert.equal(ds.acylic(), bn.acylic(), "Acylic Failure");

      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 4);

        const v = Math.floor(Math.random() * N);
        const w = Math.floor(Math.random() * N);

        switch (c) {
          case 0:
            assert.equal(ds.searchDepth(v,w).length, bn.searchDepth(v,w).length);
            break;
          case 1:
            assert.equal(ds.searchBreadth(v,w).length, bn.searchBreadth(v,w).length);
            break;
          case 2:
            assert.equal(ds.separation(v,w), bn.separation(v,w));
            break;
        }
      }
    }
  });
});