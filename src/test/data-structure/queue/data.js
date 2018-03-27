/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../data-structure/queue/source.js';
let ds = require(dsPath);

const bnPath = './../../../data-structure/queue/source.js';
let bn = require(bnPath); // benchmark

describe("Queue - Data Tests", function() {
  this.timeout(60000);

  beforeEach(() => {
    reset();
  });

  it ("queue should handle random inputs", function() {
    for (let i=0; i<500; i++) {
      for (let j=0; j<25; j++) {
        const n = Math.floor(Math.random() * j);
        const o = Math.floor(Math.random() * 5);

        switch (o) {
          case 0:
          case 1:
          case 2:
          case 3:
            ds.enqueue(n);
            bn.enqueue(n);
            break;
          default:
            ds.dequeue();
            bn.dequeue();
        }
      }

      if (JSON.stringify(ds.toArray()) === JSON.stringify(bn.toArray())) {
        const o = {
          error: 'Data structure and benchmark data is not the same',
          assert: {
            fn: 'toArray',
            bn: bn.toArray(),
            ds: ds.toArray()
          }
        };
    
        const p = util.output.write(o);
        expect('Data Structure', `DEBUG written to: ${p}`).to.equal('Benchmark');
      }
    }
  });
});

function reset() {
  decache(dsPath);
  ds = require(dsPath);

  decache(bnPath);
  bn = require(bnPath);
}