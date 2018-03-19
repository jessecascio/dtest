/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const util = require('./../../util.js');

const ds = require(util.input.s); // user data structure
const bn = require('./../../../src/data-structure/linked-list-single/source.js'); // benchmark

describe("Single Linked List - Data Tests", function() {
  this.timeout(60000);

  beforeEach(() => {
    ds.reset();
    bn.reset();
  });

  it ("list should handle random inputs", function() {
    for (let i=0; i<20; i++) {
      for (let j=0; j<500; j++) {
        const n = Math.floor(Math.random() * j);
        const o = Math.floor(Math.random() * 3);

        switch (o) {
          case 1:
            ds.addFirst(n);
            bn.addFirst(n);
            break;
          case 2:
            ds.addLast(n);
            bn.addLast(n);
            break;
          default:
            ds.add(Math.floor(ds.size()/2), n);
            bn.add(Math.floor(bn.size()/2), n);
        }
      }

      if (JSON.stringify(ds.toArray()) !== JSON.stringify(bn.toArray())) {
        const o = {
          expected: bn.toArray(),
          actual: ds.toArray()
        };

        const p = util.output.write('linked-list-singly', o);
        expect('data structure', `Data WRITTEN to: ${p}`).to.equal('benchmark');
      }
    }
  });
});