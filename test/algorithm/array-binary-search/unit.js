/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/array-binary-search/source.js';
let ds = require(dsPath);

describe("Array Binary Search - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("search()", () => {
    before(function() {
      if (!ds.search) {
        this.skip();
      }
    });

    it ("should handle an empty array", () => {
      const a = [];
      assert.equal(ds.search(1, a), -1);
    });

    it ("should find value w/ odd entries", () => {
      const a = [13,52,56,78,99];
      assert.equal(ds.search(52, a), 1);
    });

    it ("should find value w/ even entries", () => {
      const a = [13,52,56,78,99,101];
      assert.equal(ds.search(56, a), 2);
    });

    it ("should find value at the beginning", () => {
      const a = [13,52,56,78,99,101];
      assert.equal(ds.search(13, a), 0);
    });

    it ("should find value at the end", () => {
      const a = [13,52,56,78,99,101];
      assert.equal(ds.search(101, a), 5);
    });
  });
});
