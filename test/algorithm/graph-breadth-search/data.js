/**
 * data test, run against random data sets
 */

const { expect } = require('chai');
const decache = require('decache');
const util = require('./../../util.js');

const gPath = './../../../src/data-structure/graph-undirected/source.js';
let graph = require(gPath);;

const dsPath = util.input.s || './../../../src/algorithm/graph-breadth-search/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/algorithm/graph-breadth-search/source.js';
let bn = require(bnPath); // benchmark

const N = 20;

describe ("Graph Breadth First Search - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    for (let i=0; i<200; i++) {
      reset();

      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 3);
        
        const v = Math.floor(Math.random() * (2 * N));
        const w = Math.floor(Math.random() * (2 * N));

        graph.addVertice(v);
        graph.addVertice(w);

        switch (c) {
          case 0:
            graph.addEdge(v, w);
            break;
        }
      }

      for (let j=0; j<(N*4); j++) {
        const c = Math.floor(Math.random() * 4);

        const v = Math.floor(Math.random() * (2 * N));
        const w = Math.floor(Math.random() * (2 * N));

        testSearch(v,w);
      }
    }
  });
});

function testSearch(v,w) {
  const g = JSON.parse(graph.toString());

  const dsl = ds.search(g,v,w).length;
  const bsl = bn.search(g,v,w).length;

  if ((dsl === 0 && bsl > 0) || (dsl > 0 && bsl === 0)) {
    const o = {
      error: 'Data structure and benchmark search do not return the same values',
      assert: {
        fn: 'search',
        ps: [v,w],
        bn: bn.search(g,v,w),
        ds: ds.search(g,v,w)
      }
    }

    fail(o);
  }
}

function reset() {
  decache(dsPath);
  ds = require(dsPath);

  decache(bnPath);
  bn = require(bnPath);

  decache(gPath);
  graph = require(gPath);
}

function fail(o) {
  const p = util.output.write(o);
  expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
}
