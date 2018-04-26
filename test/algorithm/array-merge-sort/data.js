/**
 * data test, run against random data sets
 */

const { assert, expect } = require('chai');
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/merge-sort-array/source.js';
let ds = require(dsPath);

describe("Merge Sort Array - Data Tests", function() {
  this.timeout(60000);

  it ("should handle random inputs", function() {
    const N = 25;

    for (let i=0; i<500; i++) {
      reset();

      const a = [];
      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 1000);
        a.push(c);
      }

      testData(a);
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

function testData(a) {
  const pre = clone(a);
  const postDs = ds.sort(a);

  a.sort(function(a,b) {
    if (a<b) {
      return -1;
    } else if (a>b) {
      return 1;
    } else {
      return 0;
    }
  });

  if (JSON.stringify(a) !== JSON.stringify(postDs)) {
    const o = {
      error: 'Data structure and benchmark data do not match',
      pre: {
        bn: pre
      },
      assert: {
        fn: 'sort',
        bn: a,
        ds: postDs
      }
    }

    fail(o);
  }
}
