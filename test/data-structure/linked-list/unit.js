/**
 * unit test
 */
const assert = require("chai").assert;
const decache = require('decache');
const clone = require('clone-deep');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/linked-list/source.js';
let ds = require(dsPath);

describe("Linked List - Unit Tests", async () => {
  beforeEach(function() {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("#1) addFirst() -> [ toArray() ]", () => {
    before(function() {
      if (!ds.addFirst || !ds.toArray) {
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

  describe("#1) addLast() -> [ toArray() ]", () => {
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

  describe("#2) add() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.add || !ds.toArray || !ds.addLast) {
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
  });

  describe("#2) getFirst() -> [ addLast(), toArray() ]", () => {    
    before(function() {
      if (!ds.getFirst || !ds.addLast || !ds.toArray) {
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

  });

  describe("#2) getLast() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.getLast || !ds.addLast || !ds.toArray) {
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

  });

  describe("#2) get() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.get || !ds.addLast || !ds.toArray) {
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

  });

  describe("#2) indexOf() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.indexOf || !ds.addLast || !ds.toArray) {
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

  describe("#2) lastIndexOf() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.lastIndexOf || !ds.addLast || !ds.toArray) {
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

  describe("#2) contains() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.contains || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.isFalse(ds.contains(1));
    });

    it ("should handle single input", () => {
      ds.addLast(1);
      assert.isTrue(ds.contains(1));
      assert.isFalse(ds.contains(2));
    });

    it ("should handle multiple inputs", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.isTrue(ds.contains(1));
      assert.isTrue(ds.contains(2));
      assert.isTrue(ds.contains(3));
      assert.isTrue(ds.contains(4));
      assert.isFalse(ds.contains(5));
    });
  });
  
  describe("#3) count() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.count || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });

    it ("should handle no inputs", () => {
      assert.equal(ds.count(1), 0);
    });

    it ("should handle single input", () => {
      ds.addLast(1);
      assert.equal(ds.count(1), 1);
      assert.equal(ds.count(2), 0);
    });

    it ("should handle multiple inputs", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(4);
      ds.addLast(4);

      assert.equal(ds.count(1), 1);
      assert.equal(ds.count(2), 1);
      assert.equal(ds.count(3), 0);
      assert.equal(ds.count(4), 2);
    });
  });

  describe("#3) size() -> [ addLast(), getLast(), addFirst(),  getFirst() ]", () => {
    before(function() {
      if (!ds.count || !ds.addLast || !ds.getLast || !ds.addFirst || !ds.getFirst) {
        this.skip();
      }
    });

    it ("should update size w/ addLast", () => {;
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      assert.equal(ds.size(), 3);
    });

    it ("should update size w/ addFirst", () => {;
      ds.addFirst(1);
      ds.addFirst(2);
      ds.addFirst(3);
      assert.equal(ds.size(), 3);
    });

    it ("should update size w/ getLast", () => {;
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      
      ds.getLast();
      assert.equal(ds.size(), 2);
    });

    it ("should update size w/ getFirst", () => {;
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      
      ds.getFirst();
      assert.equal(ds.size(), 2);
    });
    
  });

  describe("OPTIONAL: middle() -> [ addLast() ]", () => {
    before(function() {
      if (!ds.middle || !ds.addLast) {
        this.skip();
      }
    });

    it ("should return 'undefined' w/ no elements", () => {
      assert.isTrue(typeof ds.middle() === "undefined");
    });

    it ("should grab middle element from single value", () => {
      ds.addLast(3);
      assert.equal(ds.middle(), 3);
    });

    it ("should grab middle element from two values", () => {
      ds.addLast(3);
      ds.addLast(5);
      assert.equal(ds.middle(), 5);
    });

    it ("should grab middle element from odd values", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(5);
      assert.equal(ds.middle(), 3);
    });

    it ("should grab middle element from even values", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(5);
      ds.addLast(6);
      assert.equal(ds.middle(), 4);
    });
  });
  
  describe("OPTIONAL: reverse() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.reverse || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });

    it ("should handle a single element", () => {
      ds.addLast(3);
      ds.reverse();

      assert.equal(JSON.stringify([3]), JSON.stringify(ds.toArray()));
    });

    it ("should handle two elements", () => {
      ds.addLast(3);
      ds.addLast(5);
      ds.reverse();

      assert.equal(JSON.stringify([5,3]), JSON.stringify(ds.toArray()));
    });

    it ("should handle many elements", () => {
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(6);
      ds.addLast(2);
      ds.addLast(16);

      ds.reverse();

      assert.equal(JSON.stringify([16,2,6,4,3]), JSON.stringify(ds.toArray()));
    });

    it ("should reverse back and forth", () => {
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(6);
      ds.addLast(2);
      ds.addLast(16);

      ds.reverse();
      assert.equal(JSON.stringify([16,2,6,4,3]), JSON.stringify(ds.toArray()));

      ds.reverse();
      assert.equal(JSON.stringify([3,4,6,2,16]), JSON.stringify(ds.toArray()));

      ds.reverse();
      assert.equal(JSON.stringify([16,2,6,4,3]), JSON.stringify(ds.toArray()));
    });
  });

  describe("OPTIONAL: reversePartial() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.reversePartial || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });

    beforeEach(function() {
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(6);
      ds.addLast(2);
      ds.addLast(16);
    });

    it ("should handle same indexes", () => {
      ds.reversePartial(1,1);
      assert.equal(JSON.stringify([3,4,6,2,16]), JSON.stringify(ds.toArray()));
    });

    it ("should handle out of bounds indexes", () => {
      ds.reversePartial(12,1);
      assert.equal(JSON.stringify([3,4,6,2,16]), JSON.stringify(ds.toArray()));

      ds.reversePartial(-1,1);
      assert.equal(JSON.stringify([3,4,6,2,16]), JSON.stringify(ds.toArray()));

      ds.reversePartial(2,14);
      assert.equal(JSON.stringify([3,4,6,2,16]), JSON.stringify(ds.toArray()));
    });

    it ("should handle the entire list", () => {
      ds.reversePartial(0,4);
      assert.equal(JSON.stringify([16,2,6,4,3]), JSON.stringify(ds.toArray()));
    });

    it ("should handle small subsets of the list", () => {
      ds.reversePartial(0,1);
      assert.equal(JSON.stringify([4,3,6,2,16]), JSON.stringify(ds.toArray()));

      ds.reversePartial(2,4);
      assert.equal(JSON.stringify([4,3,16,2,6]), JSON.stringify(ds.toArray()));
    });

    it ("should reverse the list back", () => {
      ds.reversePartial(1,4);
      assert.equal(JSON.stringify([3,16,2,6,4]), JSON.stringify(ds.toArray()));

      ds.reversePartial(1,4);
      assert.equal(JSON.stringify([3,4,6,2,16]), JSON.stringify(ds.toArray()));
    });
  });

  describe("OPTIONAL: sort() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.sort || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });

    it ("should sort w/ a single value", () => {
      ds.addLast(12);

      ds.sort();
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([12]));
    });

    it ("should sort w/ two values", () => {
      ds.addLast(12);
      ds.addLast(2);

      ds.sort();
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([2,12]));
    });

    it ("should sort an odd numbered list", () => {
      ds.addLast(11);
      ds.addLast(2);
      ds.addLast(1);
      ds.addLast(12);
      ds.addLast(4);

      ds.sort();
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,4,11,12]));
    });

    it ("should sort an even numbered list", () => {
      ds.addLast(11);
      ds.addLast(2);
      ds.addLast(1);
      ds.addLast(12);
      ds.addLast(4);
      ds.addLast(122);

      ds.sort();
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,4,11,12,122]));
    });

    it ("should sort a list w/ duplicates", () => {
      ds.addLast(11);
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(1);
      ds.addLast(4);

      ds.sort();
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,1,2,4,11]));
    });

    it ("should sort w/ low in front", () => {
      ds.addLast(1);
      ds.addLast(12);
      ds.addLast(2);
      ds.addLast(4);

      ds.sort();
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,4,12]));
    });

    it ("should sort w/ low in back", () => {
      ds.addLast(12);
      ds.addLast(2);
      ds.addLast(4);
      ds.addLast(1);

      ds.sort();
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,4,12]));
    });
  });

  describe("OPTIONAL: dedupe() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.dedupe || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });
  });

  describe("OPTIONAL: rotate() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.rotate || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });
  });

  describe("OPTIONAL: purge() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.purge || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });

    it ("should remove all instances of a value", () => {
      ds.addLast(0);
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(1);
      ds.addLast(4);
      ds.addLast(1);
      ds.addLast(5);

      ds.purge(1);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([0,2,4,5]));
    });

    it ("should remove all instances from the front of the list", () => {
      ds.addLast(0);
      ds.addLast(0);
      ds.addLast(2);
      ds.addLast(4);
      ds.addLast(1);
      ds.addLast(5);

      ds.purge(0);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([2,4,1,5]));
    });

    it ("should remove all instances from the end of the list", () => {
      ds.addLast(5);
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(4);
      ds.addLast(0);
      ds.addLast(0);

      ds.purge(0);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([5,1,2,4]));
    });

    it ("should remove all instances", () => {
      ds.addLast(0);
      ds.addLast(0);
      ds.addLast(0);
      ds.addLast(0);

      ds.purge(0);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([]));
    });

    it ("should ignore instances", () => {
      ds.addLast(0);
      ds.addLast(0);
      ds.addLast(0);
      ds.addLast(0);

      ds.purge(1);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([0,0,0,0]));
    });
  });

  describe("OPTIONAL: isPalidrome() -> [ addLast(), toArray() ]", () => {
    before(function() {
      if (!ds.isPalidrome || !ds.addLast || !ds.toArray) {
        this.skip();
      }
    });

    it ("should detect an two char palidrome", () => {
      ds.addLast(1);
      ds.addLast(1);
      
      const data = clone(ds.toArray());
      assert.isTrue(ds.isPalidrome());
      assert.equal(JSON.stringify(data), JSON.stringify(ds.toArray()));
    });

    it ("should detect an two char non palidrome", () => {
      ds.addLast(1);
      ds.addLast(4);
      
      const data = clone(ds.toArray());
      assert.isFalse(ds.isPalidrome());
      assert.equal(JSON.stringify(data), JSON.stringify(ds.toArray()));
    });

    it ("should detect an odd palidrome", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(2);
      ds.addLast(1);
      
      const data = clone(ds.toArray());
      assert.isTrue(ds.isPalidrome());
      assert.equal(JSON.stringify(data), JSON.stringify(ds.toArray()));
    });

    it ("should detect an even palidrome", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(2);
      ds.addLast(1);
      
      const data = clone(ds.toArray());
      assert.isTrue(ds.isPalidrome());
      assert.equal(JSON.stringify(data), JSON.stringify(ds.toArray()));
    });

    it ("should detect an odd non palidrome", () => {
      ds.addLast(1);
      ds.addLast(4);
      ds.addLast(2);
      ds.addLast(2);
      ds.addLast(1);
      
      const data = clone(ds.toArray());
      assert.isFalse(ds.isPalidrome());
      assert.equal(JSON.stringify(data), JSON.stringify(ds.toArray()));
    });

    it ("should detect an even non palidrome", () => {
      ds.addLast(1);
      ds.addLast(4);
      ds.addLast(2);
      ds.addLast(1);
      
      const data = clone(ds.toArray());
      assert.isFalse(ds.isPalidrome());
      assert.equal(JSON.stringify(data), JSON.stringify(ds.toArray()));
    });
  });
});

