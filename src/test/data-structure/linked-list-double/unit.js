/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../data-structure/linked-list-double/source.js');

describe("Double Linked List - Unit Tests", async () => {
  before(function() {
    ['toArray', 'reset', 'size'].map((f) => {
      if (!ds[f]) {
        assert.fail(null, true, `Function Required: ${f}()`)
      }
    });
  });

  beforeEach(() => {
    ds.reset();
  });

  describe("#add", () => {
    before(function() {
      if (!ds.add) {
        this.skip();
      }
    });

    it ("should return false for too large of index", () => {
      assert.isFalse(ds.add(100, 1));
    });

    it ("should return false for negative index", () => {
      assert.isFalse(ds.add(-9, 1));
    });

    it ("should add to middle of list", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(5);

      assert.isTrue(ds.add(3, 4));
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,3,4,5]));
    });

    it ("should add to beggining of list", () => {
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.isTrue(ds.add(0, 1));
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,3,4]));
    });

    it ("should add to end of list", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);

      assert.isTrue(ds.add(3, 4));
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,3,4]));
    });

    it ("should update size", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.add(3, 4)
      
      assert.equal(ds.size(), 4);
    });
  });

  describe("#addFirst", () => {
    before(function() {
      if (!ds.addFirst) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([]));
    });
    
    it ("should handle single input", () => {
      ds.addFirst(2);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([2]));
    });

    it ("should retain values in correct order", () => {
      ds.addFirst(1);
      ds.addFirst(2);
      ds.addFirst(3);
      ds.addFirst(4);
      ds.addFirst(5);

      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([5,4,3,2,1]));
    });
  });

  describe("#addLast", () => {
    before(function() {
      if (!ds.addLast) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([]));
    });

    it ("should handle single input", () => {
      ds.addLast(2);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([2]));
    });

    it ("should retain values in correct order", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(5);

      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,3,4,5]));
    });
  });

  describe("#get", () => {
    before(function() {
      if (!ds.get) {
        this.skip();
      }
    });

    it ("should return undefined for too large of index", () => {
      assert.equal(ds.get(100), undefined);
    });

    it ("should return undefined for negative index", () => {
      assert.equal(ds.get(-9), undefined);
    });

    it ("should handle single input", () => {
      ds.addLast(5);
      assert.equal(ds.get(0), 5);
      assert.equal(ds.get(0), undefined);
    });

    it ("should get from middle of list", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(5);

      assert.equal(ds.get(2), 3);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,4,5]));
    });

    it ("should get from begining of list", () => {;
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.equal(ds.get(0), 2);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([3,4]));
    });

    it ("should get from end of list", () => {;
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);

      assert.equal(ds.get(3), undefined);
      assert.equal(ds.get(2), 3);

      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2]));
    });

    it ("should update size", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      assert.equal(ds.size(), 3);

      ds.get(1);
      assert.equal(ds.size(), 2);
    });
  });

  describe("#getFirst", () => {
    before(function() {
      if (!ds.getFirst) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.equal(ds.getFirst(), undefined);
    });
    
    it ("should handle single input", () => {
      ds.addLast(2);
      assert.equal(ds.getFirst(), 2);
      assert.equal(ds.getFirst(), undefined);
    });

    it ("should retain values in correct order", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.equal(ds.getFirst(), 1);
      assert.equal(ds.getFirst(), 2);
      assert.equal(ds.getFirst(), 3);
      assert.equal(ds.getFirst(), 4);
      assert.equal(ds.getFirst(), undefined);
    });

    it ("should update size", () => {;
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      assert.equal(ds.size(), 3);

      ds.getFirst();
      assert.equal(ds.size(), 2);
    });
  });

  describe("#getLast", () => {
    before(function() {
      if (!ds.getLast) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.equal(ds.getLast(), undefined);
    });
    
    it ("should handle single input", () => {
      ds.addLast(2);
      assert.equal(ds.getLast(), 2);
      assert.equal(ds.getLast(), undefined);
    });

    it ("should retain values in correct order", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.equal(ds.getLast(), 4);
      assert.equal(ds.getLast(), 3);
      assert.equal(ds.getLast(), 2);
      assert.equal(ds.getLast(), 1);
      assert.equal(ds.getLast(), undefined);
    });

    it ("should update size", () => {;
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      assert.equal(ds.size(), 3);

      ds.getLast();
      assert.equal(ds.size(), 2);
    });
  });

  describe("#indexOf", () => {
    before(function() {
      if (!ds.indexOf) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.equal(ds.indexOf(4), undefined);
    });
    
    it ("should handle single input", () => {
      ds.addLast(2);
      assert.equal(ds.indexOf(4), undefined);
      assert.equal(ds.indexOf(2), 0);
    });

    it ("should retain values in correct order", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.equal(ds.indexOf(1), 0);
      assert.equal(ds.indexOf(2), 1);
      assert.equal(ds.indexOf(3), 2);
      assert.equal(ds.indexOf(4), 3);
      assert.equal(ds.indexOf(5), undefined);
    });
  });

  describe("#lastIndexOf", () => {
    before(function() {
      if (!ds.lastIndexOf) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.equal(ds.lastIndexOf(4), undefined);
    });
    
    it ("should handle single input", () => {
      ds.addLast(2);
      assert.equal(ds.lastIndexOf(4), undefined);
      assert.equal(ds.lastIndexOf(2), 0);
    });

    it ("should retain values in correct order", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(2);

      assert.equal(ds.lastIndexOf(1), 0);
      assert.equal(ds.lastIndexOf(3), 2);
      assert.equal(ds.lastIndexOf(4), 3);
      assert.equal(ds.lastIndexOf(2), 4);

      assert.equal(ds.lastIndexOf(5), undefined);
    });
  });

  describe("#contains", () => {
    before(function() {
      if (!ds.contains) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.isFalse(ds.contains(1));
    });

    it ("should handle single input", () => {
      ds.addFirst(1);
      assert.isTrue(ds.contains(1));
      assert.isFalse(ds.contains(2));
    });

    it ("should handle multiple inputs", () => {
      ds.addFirst(1);
      ds.addFirst(2);
      ds.addFirst(3);
      ds.addFirst(4);

      assert.isTrue(ds.contains(1));
      assert.isTrue(ds.contains(2));
      assert.isTrue(ds.contains(3));
      assert.isTrue(ds.contains(4));
      assert.isFalse(ds.contains(5));
    });
  });

  describe("#count", () => {
    before(function() {
      if (!ds.count) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.equal(ds.count(1), 0);
    });

    it ("should handle single input", () => {
      ds.addFirst(1);
      assert.equal(ds.count(1), 1);
      assert.equal(ds.count(2), 0);
    });

    it ("should handle multiple inputs", () => {
      ds.addFirst(1);
      ds.addFirst(2);
      ds.addFirst(4);
      ds.addFirst(4);

      assert.equal(ds.count(1), 1);
      assert.equal(ds.count(2), 1);
      assert.equal(ds.count(3), 0);
      assert.equal(ds.count(4), 2);
    });
  });
});
