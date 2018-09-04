/**
 * data test, run against random data sets
 */

const { assert, expect } = require('chai');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/array-binary-search/source.js';
let ds = require(dsPath);

describe ("Array Binary Search - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    const N = 100;

    for (let i=0; i<500; i++) {
      reset();

      const a = [];
      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * (2*N));
        if (a.indexOf(c) === -1) {
          a.push(c);
        }
      }

      a.sort(function(a,b) {
        if (a<b) {
          return -1;
        } else if (a>b) {
          return 1;
        } else {
          return 0;
        }
      });
      
      for (let j=0; j<(2*N); j++) {
        test(j, a);
      }
    }
  });
});

function reset() {
  decache(dsPath);
  ds = require(dsPath);
}

function fail(o) {
  const p = util.output.write(o);
  expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
}

function test(v,d) {
  const a = d.indexOf(v);
  const b = ds.search(v,d);

  if (a !== b) {
    const o = {
      error: 'Data structure and benchmark data do not match',
      pre: {
        bn: d
      },
      assert: {
        fn: 'search',
        bn: a,
        ds: b
      }
    }

    fail(o);
  }
}