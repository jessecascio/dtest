/**
 * data test, run against random data sets
 */

const { assert, expect } = require('chai');
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-dijkstra/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/algorithm/graph-dijkstra/source.js';
let bn = require(bnPath); // benchmark

describe ("Graph Dijkstra - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    for (let i=0; i<100; i++) {
      reset();
      const g = graph();

      for (let j=0; j<250; j++) {
        const v = Math.floor(Math.random() * 25) + 2;
        const w = Math.floor(Math.random() * 25) + 1;

        testDistTo(g,v,w);
      }
    }
  });
});

function testDistTo(g,v,w) {    
  const a = ds.distTo(clone(g),v,w);
  const b = bn.distTo(clone(g),v,w);

  if (a !== b) {
    const o = {
      error: 'Data structure and benchmark data do not match',
      pre: {
        bn: g
      },
      assert: {
        fn: 'distTo',
        ps: [v,w],
        bn: b,
        ds: a
      }
    }

    fail(o);
  }
}

function graph() {
  const N = 25;
  const g = {};
  const wts = [];
  
  for (let i=1; i<=N; i++) {
    g[i] = [];

    const r = Math.floor(Math.random() * 10) + 1;
    const dp = [];

    for (let k=0; k<r; k++) {
      let w = Math.floor(Math.random() * 500);
      while (wts.indexOf(w) !== -1) {
        w = Math.floor(Math.random() * 500); 
      }

      const j = Math.floor(Math.random() * N) + 1;
      if (dp.indexOf(j) === -1) {
        g[i].push([j,w])
        dp.push(j);
      }
      
      wts.push(w);
    }
  }

  return g;
}

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
