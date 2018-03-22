/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../data-structure/binary-heap-max/source.js');

describe("Binary Heap Max - Unit Tests", async () => {
  before(function() {
    ['reset', 'toArray', 'size'].map((f) => {
      if (!ds[f]) {
        assert.fail(null, true, `Function Required: ${f}()`)
      }
    });
  });

  beforeEach(() => {
    ds.reset();
  });

  describe("#insert", () => {
    before(function() {
      if (!ds.insert) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.insert(5);
      assert.equal(ds.size(), 1);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,5]));
    });

    it ("should handle some values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);
      assert.equal(ds.size(), 5);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,13,10,1,5,9]));
    });

    it ("should handle many values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);
      ds.insert(99);
      ds.insert(75);
      ds.insert(83);
      ds.insert(2);

      assert.equal(ds.size(), 9);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,99,83,75,10,9,1,13,5,2]));
    });

    it ("should handle same value", () => {
      ds.insert(1);
      ds.insert(1);
      ds.insert(5);
      ds.insert(1);
      assert.equal(ds.size(), 4);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,5,1,1,1]));
    });

    it ("should handle desc values", () => {
      ds.insert(10);
      ds.insert(6);
      ds.insert(4);
      ds.insert(2);
      ds.insert(1);

      assert.equal(ds.size(), 5);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,10,6,4,2,1]));
    });

    it ("should handle asc values", () => {
      ds.insert(1);
      ds.insert(2);
      ds.insert(4);
      ds.insert(6);
      ds.insert(10);

      assert.equal(ds.size(), 5);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,10,6,2,1,4]));
    });
  });

  describe("#remove", () => {
    before(function() {
      if (!ds.remove) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.insert(5);
      
      assert.equal(5, ds.remove());
      assert.equal(ds.size(), 0);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,null]));
    });

    it ("should handle some values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);

      assert.equal(13, ds.remove());
      assert.equal(ds.size(), 4);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,10,9,1,5,null]));
    });

    it ("should handle many values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);
      ds.insert(99);
      ds.insert(75);
      ds.insert(83);
      ds.insert(2);

      assert.equal(99, ds.remove());
      assert.equal(ds.size(), 8);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,83,10,75,5,9,1,13,2,null]));
    });

    it ("should handle remove and insert values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);
      ds.insert(99);
      ds.insert(75);
      ds.insert(83);
      ds.insert(2);

      assert.equal(99, ds.remove());
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,83,10,75,5,9,1,13,2,null]));

      assert.equal(83, ds.remove());
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,75,10,13,5,9,1,2,null,null]));

      assert.equal(75, ds.remove());
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,13,10,2,5,9,1,null,null,null]));

      ds.insert(0);
      ds.insert(88);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,88,13,2,10,9,1,0,5,null]));
    });

    it ("should handle same value", () => {
      ds.insert(1);
      ds.insert(1);
      ds.insert(5);
      ds.insert(1);

      assert.equal(5, ds.remove());
      assert.equal(ds.size(), 3);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,1,1,1,null]));
    });
  });

  describe("#peek", () => {
    before(function() {
      if (!ds.peek) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.insert(5);
      
      assert.equal(5, ds.peek());
      assert.equal(ds.size(), 1);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,5]));
    });

    it ("should handle values", () => {
      ds.insert(5);
      ds.insert(10);
      ds.insert(1);
      ds.insert(13);
      ds.insert(9);

      assert.equal(13, ds.peek());
      assert.equal(ds.size(), 5);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,13,10,1,5,9]));

      ds.remove();
      assert.equal(10, ds.peek());
      assert.equal(ds.size(), 4);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([null,10,9,1,5,null]));
    });

    it ("should handle same value", () => {
      ds.insert(1);
      ds.insert(1);
      ds.insert(1);

      assert.equal(1, ds.peek());
      assert.equal(ds.size(), 3);
    });
  });
});
