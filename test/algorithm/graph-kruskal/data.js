/**
 * data test, run against random data sets
 */

const { assert, expect } = require('chai');
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-kruskal/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/algorithm/graph-kruskal/source.js';
let bn = require(bnPath); // benchmark

const N = 20;

describe ("Graph Kruskal - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    for (let i=0; i<500; i++) {
      reset();
      const g = graph();
      testWeight(g);
      testMst(g);
    }
  });
});

function testWeight(g) {    
  const a = ds.weight(clone(g));
  const b = bn.weight(clone(g));

  if (a !== b) {
    const o = {
      error: 'Data structure and benchmark weights do not match',
      pre: {
        bn: g
      },
      assert: {
        fn: 'weight',
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
  const paths = {};
  const wts = [];
  
  for (let i=1; i<=N; i++) {
    if (!g[i]) {
      g[i] = [];
    }
    if (!paths[i]) {
      paths[i] = [];
    }
    
    for (let j=i+1; j<=N; j++) {
      if (!g[j]) {
        g[j] = [];
      }
      if (!paths[j]) {
        paths[j] = [];
      }

      let w = Math.floor(Math.random() * (N * 10)) + 1;
      while (wts.indexOf(w) !== -1) {
        w = Math.floor(Math.random() * (N * 10)) + 1; 
      }

      if (paths[j].indexOf(i) === -1) {
        g[i].push([j,w]);
        g[j].push([i,w]);
        paths[i].push(j);
        wts.push(w);
      }
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
