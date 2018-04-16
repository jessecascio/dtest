/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/binary-heap-max/source.js';
let ds = require(dsPath);

describe("Binary Max Heap - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("#1) insert() -> [ size(), toArray() ]", () => {
    before(function() {
      if (!ds.insert || !ds.size || !ds.toArray) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.insert(5);
      assert.equal(ds.size(), 1);

      const a = ds.toArray();
      assert.equal(a.length, 2);
      assert.equal(a[1], 5);
    });

    it ("should handle some values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);
      assert.equal(ds.size(), 5);

      const a = ds.toArray();
      assert.equal(a.length, 6);
      assert.equal(a[1], 13);
      assert.equal(a[2], 10);
      assert.equal(a[3], 1);
      assert.equal(a[4], 5);
      assert.equal(a[5], 9);
    });

    it ("should handle same value", () => {
      ds.insert(1);
      ds.insert(1);
      ds.insert(5);
      ds.insert(1);
      assert.equal(ds.size(), 4);
      
      const a = ds.toArray();
      assert.equal(a.length, 5);
      assert.equal(a[1], 5);
      assert.equal(a[2], 1);
      assert.equal(a[3], 1);
      assert.equal(a[4], 1);
    });

    it ("should handle negative values", () => {
      ds.insert(1);
      ds.insert(1);
      ds.insert(-5);
      assert.equal(ds.size(), 3);
      
      const a = ds.toArray();
      assert.equal(a.length, 4);
      assert.equal(a[1], 1);
      assert.equal(a[2], 1);
      assert.equal(a[3], -5);
    });

    it ("should handle desc values", () => {
      ds.insert(10);
      ds.insert(6);
      ds.insert(4);
      ds.insert(2);
      ds.insert(1);
      assert.equal(ds.size(), 5);
      
      const a = ds.toArray();
      assert.equal(a.length, 6);
      assert.equal(a[1], 10);
      assert.equal(a[2], 6);
      assert.equal(a[3], 4);
      assert.equal(a[4], 2);
      assert.equal(a[5], 1);
    });

    it ("should handle asc values", () => {
      ds.insert(1);
      ds.insert(2);
      ds.insert(4);
      ds.insert(6);
      ds.insert(10);
      assert.equal(ds.size(), 5);
      
      const a = ds.toArray();
      assert.equal(a.length, 6);
      assert.equal(a[1], 10);
      assert.equal(a[2], 6);
      assert.equal(a[3], 2);
      assert.equal(a[4], 1);
      assert.equal(a[5], 4);
    });
  });

  describe("#2) remove() -> [ insert(), size() ]", () => {
    before(function() {
      if (!ds.remove || !ds.insert || !ds.size || !ds.toArray) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.insert(5);
      assert.equal(5, ds.remove());
      assert.equal(ds.size(), 0);
    });

    it ("should handle many values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);

      assert.equal(13, ds.remove());
      assert.equal(ds.size(), 4);

      const a = ds.toArray();
      assert.equal(a[1], 10);
      assert.isTrue(a.indexOf(5) !== -1);
      assert.isTrue(a.indexOf(1) !== -1);
      assert.isTrue(a.indexOf(9) !== -1);
    });

    it ("should handle remove and insert values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);

      const array = ds.toArray();

      assert.equal(13, ds.remove());
      assert.equal(array[1], 10);
      assert.isTrue(array.indexOf(5) !== -1);
      assert.isTrue(array.indexOf(1) !== -1);
      assert.isTrue(array.indexOf(9) !== -1);

      assert.equal(10, ds.remove());
      assert.equal(array[1], 9);
      assert.isTrue(array.indexOf(5) !== -1);
      assert.isTrue(array.indexOf(1) !== -1);
      
      ds.insert(0);
      ds.insert(88);
      ds.insert(62);
      
      assert.equal(88, ds.remove());
      assert.equal(62, ds.remove());
      assert.isTrue(array.indexOf(5) !== -1);
      assert.isTrue(array.indexOf(1) !== -1);
      assert.isTrue(array.indexOf(9) !== -1);
      assert.isTrue(array.indexOf(0) !== -1);
    });

    it ("should handle same value", () => {
      ds.insert(1);
      ds.insert(1);
      ds.insert(5);
      ds.insert(1);

      assert.equal(5, ds.remove());
      assert.equal(ds.size(), 3);
     
      const a = ds.toArray();
      assert.equal(a[1], 1);
    });

    it ("should handle no values", () => {
      ds.insert(1);
      assert.equal(1, ds.remove());

      const r = ds.remove();
      assert.isTrue(typeof r === "undefined" || r === null);
    });
  });

  describe("#3) peek() -> [ insert(), remove() ]", () => {
    before(function() {
      if (!ds.peek || !ds.insert || !ds.remove || !ds.toArray) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.insert(5);
      assert.equal(5, ds.peek());
    });

    it ("should handle multiple values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);

      assert.equal(13, ds.peek());
    });

    it ("should handle same value", () => {
      ds.insert(1);
      ds.insert(1);
      ds.insert(1);

      assert.equal(1, ds.peek());
      assert.equal(ds.size(), 3);
    });

    it ("should handle removing values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);

      ds.remove();
      assert.equal(10, ds.peek());

      ds.remove();
      assert.equal(9, ds.peek());
    });
  });
});
