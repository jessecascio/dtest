/**
 * unit test
 */

const assert = require("chai").assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/disjointed-set/source.js';
let ds = require(dsPath);

describe("Disjointed Set - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("#1) init() -> [ toArray() ]", () => {
    before(function() {
      if (!ds.init || !ds.toArray) {
        this.skip();
      }
    });

    it ("should correctly init the array", () => {
      ds.init(10);
      const a = [...Array(10).keys()];
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify(a));
    });
  });

  describe("#2) union() -> [ init(), size() ]", () => {
    before(function() {
      if (!ds.union || !ds.init || !ds.size) {
        this.skip();
      }
    });

    beforeEach(() => {
      ds.init(10);
    });

    it ("should handle no connections", () => {
      assert.equal(ds.size(), 10);
    });

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

    it ("should ignore existing connections", () => {
      ds.union(0, 1);
      ds.union(1, 2);
      ds.union(3, 4);
      ds.union(4, 5);

      assert.equal(ds.size(), 6);

      ds.union(2, 3);
      assert.equal(ds.size(), 5);

      ds.union(2, 3);
      assert.equal(ds.size(), 5);
    });
  });

  describe("#3) connected() -> [ union() ]", () => {
    before(function() {
      if (!ds.connected || !ds.init || !ds.union) {
        this.skip();
      }
    });

    beforeEach(() => {
      ds.init(10);
    });

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

    it ("should handle bi-directional unions", () => {
      ds.union(1,0);
      ds.union(2,1);
      ds.union(4,3);
      ds.union(3,4);
      
      assert.isTrue(ds.connected(3,4));
    });

    it ("should handle bi-directional connections", () => {
      ds.union(1,0);
      ds.union(2,1);
      ds.union(4,3);
      ds.union(5,2);
      
      assert.isTrue(ds.connected(4,3));
      assert.isTrue(ds.connected(3,4));
    });

    it ("should handle multiple connections to same node", () => {
      ds.union(4,3);
      ds.union(7,3);
      assert.isTrue(ds.connected(4,7));

      ds.union(5,8);
      ds.union(5,9);
      assert.isTrue(ds.connected(8,9));
    });
  });
});
