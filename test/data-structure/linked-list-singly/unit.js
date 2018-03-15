/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../src/data-structure/linked-list-singly/source.js');

describe("Singly Linked List - Unit Tests", async () => {
  beforeEach(() => {
    ds.clear();
  });

  describe("#add", () => {
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

  describe("#getFirst", () => {    it ("should handle no inputs", () => {
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

  describe("#getLast", () => {    it ("should handle no inputs", () => {
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

  describe("#peek", () => {
    it ("should return undefined for too large of index", () => {
      assert.equal(ds.peek(100), undefined);
    });

    it ("should return undefined for negative index", () => {
      assert.equal(ds.peek(-9), undefined);
    });

    it ("should get from middle of list", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);
      ds.addLast(5);

      assert.equal(ds.peek(2), 3);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,3,4,5]));
    });

    it ("should get from begining of list", () => {
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.equal(ds.peek(0), 2);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([2,3,4]));
    });

    it ("should get from end of list", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      
      assert.equal(ds.peek(3), undefined);
      assert.equal(ds.peek(2), 3);

      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,3]));
    });

    it ("should not update size", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      assert.equal(ds.size(), 3);

      ds.peek(1);
      assert.equal(ds.size(), 3);
    });
  });

  describe("#peekFirst", () => {
    it ("should handle no inputs", () => {
      assert.equal(ds.peekFirst(), undefined);
    });
    
    it ("should handle single input", () => {
      ds.addLast(2);
      assert.equal(ds.peekFirst(), 2);
      assert.equal(ds.peekFirst(), 2);
    });

    it ("should retain values in correct order", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.equal(ds.peekFirst(), 1);
      ds.getFirst();

      assert.equal(ds.peekFirst(), 2);
      ds.getFirst();

      assert.equal(ds.peekFirst(), 3);
      ds.getFirst();

      assert.equal(ds.peekFirst(), 4);
      ds.getFirst();

      assert.equal(ds.peekFirst(), undefined);
    });

    it ("should not update size", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      assert.equal(ds.size(), 3);

      ds.peekFirst();
      assert.equal(ds.size(), 3);
    });
  });

  describe("#peekLast", () => {
    it ("should handle no inputs", () => {
      assert.equal(ds.peekLast(), undefined);
    });
    
    it ("should handle single input", () => {
      ds.addLast(2);
      assert.equal(ds.peekLast(), 2);
      assert.equal(ds.peekLast(), 2);
    });

    it ("should retain values in correct order", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      ds.addLast(4);

      assert.equal(ds.peekLast(), 4);
      ds.getLast();

      assert.equal(ds.peekLast(), 3);
      ds.getLast();

      assert.equal(ds.peekLast(), 2);
      ds.getLast();

      assert.equal(ds.peekLast(), 1);
      ds.getLast();

      assert.equal(ds.peekLast(), undefined);
    });

    it ("should not update size", () => {
      ds.addLast(1);
      ds.addLast(2);
      ds.addLast(3);
      assert.equal(ds.size(), 3);

      ds.peekLast();
      assert.equal(ds.size(), 3);
    });
  });

  describe("#indexOf", () => {
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

  describe("#size", () => {
    it ("should handle no inputs", () => {
      assert.equal(ds.size(), 0);
    });

    it ("should track size", () => {
      ds.addFirst(1);
      ds.addFirst(2);
      ds.addFirst(3);
      ds.addFirst(4);
      ds.addFirst(5);

      assert.equal(ds.size(), 5);
    });
  });

  describe("#clear", () => {
    it ("should reset data structure", () => {
      ds.addFirst(1);
      ds.addFirst(1);
      ds.addFirst(1);
      assert.equal(ds.size(), 3);

      ds.clear();
      assert.equal(ds.size(), 0);
    });
  });
});
