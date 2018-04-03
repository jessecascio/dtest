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

    it ("should sort an array", () => {
      const a = [13,52,23,45,67];
      ds.sort(a);
      
      assert.equal(JSON.stringify(a), JSON.stringify([13,23,45,52,67]));
    });
  });
});
