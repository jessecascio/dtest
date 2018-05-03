/**
 * data test, run against random data sets
 */

const { assert, expect } = require('chai');
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-prim/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/algorithm/graph-prim/source.js';
let bn = require(bnPath); // benchmark

const N = 25;

describe ("Graph Prim - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    for (let i=0; i<500; i++) {
      reset();
      const g = graph();
      testSize(g);
      testMst(g);
    }
  });
});

function testSize(g) {    
  const a = ds.size(clone(g));
  const b = bn.size(clone(g));

  if (a !== b) {
    const o = {
      error: 'Data structure and benchmark data do not match',
      pre: {
        bn: g
      },
      assert: {
        fn: 'size',
        bn: b,
        ds: a
      }
    }

    fail(o);
  }
}

function testMst(g) {    
  const a = ds.mst(clone(g));
  const b = bn.mst(clone(g));

  if (a.length !== b.length) {
    const o = {
      error: 'Data structure and benchmark lengths data do not match',
      pre: {
        bn: g
      },
      assert: {
        fn: 'mst',
        bn: b,
        ds: a
      }
    }

    fail(o);
  }
}

function graph() {
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
