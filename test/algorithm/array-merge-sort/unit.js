/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/merge-sort-array/source.js';
let ds = require(dsPath);

describe("Merge Sort Array - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("sort()", () => {
    before(function() {
      if (!ds.sort) {
        this.skip();
      }
    });

    it ("should handle an empty array", () => {
      const a = [];
      const b = ds.sort(a);
      
      assert.equal(JSON.stringify(b), JSON.stringify([]));
    });

    it ("should sort an array", () => {
      const a = [13,52,23,45,67];
      const b = ds.sort(a);
      
      assert.equal(JSON.stringify(b), JSON.stringify([13,23,45,52,67]));
    });

    it ("should handle duplicates", () => {
      const a = [67,23,13,23,23];
      const b = ds.sort(a);
      
      assert.equal(JSON.stringify(b), JSON.stringify([13,23,23,23,67]));
    });
  });
});
