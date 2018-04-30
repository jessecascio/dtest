/**
 * data test, run against random data sets
 */

const { assert, expect } = require('chai');
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-kosaraju/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/algorithm/graph-kosaraju/source.js';
let bn = require(bnPath); // benchmark

const gPath = './../../../src/data-structure/graph-directed/source.js';
let graph = require(gPath);

describe ("Graph Kosaraju - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    const N = 25;

    for (let i=0; i<500; i++) {
      reset();

      for (let j=0; j<N; j++) {
        graph.addVertice(j);
      }
      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 6);
        if (c === 1) {
          graph.addEdge(j, Math.floor(Math.random() * N));
        }
        if (c === 2) {
          graph.addEdge(j, Math.floor(Math.random() * N));
          graph.addEdge(j, Math.floor(Math.random() * N));
        }
        if (c === 3) {
          graph.addEdge(j, Math.floor(Math.random() * N));
          graph.addEdge(j, Math.floor(Math.random() * N));
          graph.addEdge(j, Math.floor(Math.random() * N));
        }
      }

      testKosaraju();
    }
  });
});

function reset() {
  decache(dsPath);
  ds = require(dsPath);

  decache(bnPath);
  bn = require(bnPath);

  graph.reset();
}

function fail(o) {
  const p = util.output.write(o);
  expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
}

function testKosaraju() {
  let g = JSON.parse(graph.toString());

  const a = ds.components(clone(g));
  const b = bn.components(clone(g));

  if (a !== b) {
    const o = {
      error: 'Data structure and benchmark data do not match',
      pre: {
        bn: g
      },
      assert: {
        fn: 'components',
        bn: a,
        ds: b
      }
    }

    fail(o);
  }
}
