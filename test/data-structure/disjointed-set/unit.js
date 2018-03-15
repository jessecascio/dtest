/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../src/data-structure/disjointed-set/source.js');

describe("Disjointed Set - Unit Tests", async () => {
  beforeEach(() => {
    ds.init(10);
  });

  describe("#union", () => {
    it ("should handle single connection", () => {
      ds.union(4, 3);
      assert.equal(ds.size(), 9);
    });

    it ("should handle multiple connections", () => {
      ds.union(4, 3);
      ds.union(3, 8);
      ds.union(6, 5);
      ds.union(9, 4);
      ds.union(2, 1);
      assert.equal(ds.size(), 5);
    });

    it ("should handle all connections", () => {
      ds.union(0, 1);
      ds.union(1, 2);
      ds.union(2, 3);
      ds.union(3, 4);
      ds.union(4, 5);
      ds.union(5, 6);
      ds.union(6, 7);
      ds.union(7, 8);
      ds.union(8, 9);
      assert.equal(ds.size(), 1);
    });

    it ("should ignore too large of numbers", () => {
      ds.union(0, 1);
      ds.union(2, 3);
      ds.union(2, 13);
      assert.equal(ds.size(), 8);
    });

    it ("should ignore negative numbers", () => {
      ds.union(0, 1);
      ds.union(2, 3);
      ds.union(2, -3);
      assert.equal(ds.size(), 8);
    });
  });

  describe("#connected", () => {
    it ("should determine default connectivity", () => {
      assert.isFalse(ds.connected(4, 3));
    });

    it ("should handle single connection", () => {
      ds.union(4, 3);
      assert.isTrue(ds.connected(4, 3));
      assert.isTrue(ds.connected(3, 4));
      assert.isFalse(ds.connected(4, 5));
      assert.isFalse(ds.connected(2, 3));
    });

    it ("should handle multiple connections", () => {
      ds.union(4, 3);
      ds.union(3, 8);
      ds.union(6, 5);
      ds.union(9, 4);
      ds.union(2, 1);
      
      assert.isTrue(ds.connected(4, 8));
      assert.isTrue(ds.connected(3, 4));
      assert.isTrue(ds.connected(9, 3));
      assert.isTrue(ds.connected(9, 8));
      assert.isTrue(ds.connected(5, 6));
      assert.isTrue(ds.connected(2, 1));
      assert.isFalse(ds.connected(6, 8));
      assert.isFalse(ds.connected(1, 0));
      assert.isFalse(ds.connected(2, 5));
    });
  });
  
  describe("#size", () => {
    it ("should set a default size", () => {
      assert.equal(ds.size(), 10);
    });
  });
});
