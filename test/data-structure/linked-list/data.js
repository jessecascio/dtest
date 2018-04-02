/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const clone = require('clone-deep');
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/linked-list/source.js';
let ds = require(dsPath);

const bnPath = './../../../src/data-structure/linked-list/source.js';
let bn = require(bnPath); // benchmark

describe("Linked List - Data Tests", function() {
  this.timeout(60000);

  beforeEach(() => {
    reset();
  });

  it ("should handle random inputs", function() {
    for (let i=0; i<300; i++) {
      for (let j=0; j<25; j++) {
        const n = Math.floor(Math.random() * j);
        const o = Math.floor(Math.random() * 8);

        switch (o) {
          case 1:
            ds.addFirst(n);
            bn.addFirst(n);
            break;
          case 2:
            ds.addLast(n);
            bn.addLast(n);
            break;
          case 3:
            ds.getFirst();
            bn.getFirst();
            break;
          case 4:
            ds.getLast();
            bn.getLast();
            break;
          case 5:
            ds.reverse();
            bn.reverse();
          default:
            ds.add(Math.floor(ds.size()/2), n);
            bn.add(Math.floor(bn.size()/2), n);
        }
      }

      if (JSON.stringify(ds.toArray()) !== JSON.stringify(bn.toArray())) {
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