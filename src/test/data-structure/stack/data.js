/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const util = require('./../../util.js');

const ds = require(util.input.s); // user data structure
const bn = require('./../../../data-structure/stack/source.js'); // benchmark

describe("Stack - Data Tests", function() {
  this.timeout(60000);

  beforeEach(() => {
    ds.clear();
    bn.clear();
  });

  it ("stack should handle random inputs", function() {
    for (let i=0; i<20; i++) {
      for (let j=0; j<500; j++) {
        const n = Math.floor(Math.random() * j);
        const o = Math.floor(Math.random() * 5);

        switch (o) {
          case 0:
          case 1:
          case 2:
          case 3:
            ds.push(n);
            bn.push(n);
            break;
          default:
            ds.pop();
            bn.pop();
        }
      }

      if (JSON.stringify(ds.toArray()) !== JSON.stringify(bn.toArray())) {
        const o = {
          expected: bn.toArray(),
          actual: ds.toArray()
        };

        const p = util.output.write('stack', o);
        expect('data structure', `Data WRITTEN to: ${p}`).to.equal('benchmark');
      }
    }
  });
});