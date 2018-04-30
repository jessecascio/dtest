/**
 * unit test
 */

const assert = require("chai").assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/graph-directed/source.js';
let ds = require(dsPath);

describe("Directed Graph - Unit Tests", async () => {

  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
    
    if (!ds.addVertice || !ds.addEdge) {
      return;
    }

    ds.addVertice(1);
    ds.addVertice(2);
    ds.addVertice(3);
    ds.addVertice(4);
    ds.addVertice(5);
    ds.addVertice(6);
    ds.addVertice(7);
    ds.addVertice(8);
    ds.addVertice(9);

    ds.addEdge(1, 2);
    ds.addEdge(1, 3);
    ds.addEdge(2, 4);
    ds.addEdge(3, 5);
    ds.addEdge(4, 6);
    ds.addEdge(4, 5);
    ds.addEdge(5, 7);
    ds.addEdge(3, 8);
    ds.addEdge(8, 9);

    ds.addVertice(101);
    ds.addVertice(102);
    ds.addVertice(103);

    ds.addEdge(101, 102);
    ds.addEdge(101, 103);
  });

  describe ("#1) searchDepth() -> [ addVertice(), addEdge() ]", () => {
    before(function() {
      if (!ds.searchDepth || !ds.addVertice || !ds.addEdge) {
        this.skip();
      }
    });

    it ("should determine depth path", () => {
      assert.equal(JSON.stringify(ds.searchDepth(1,7)), JSON.stringify([1,2,4,5,7]));
      assert.equal(JSON.stringify(ds.searchDepth(7,1)), JSON.stringify([]));
      assert.equal(JSON.stringify(ds.searchDepth(3,9)), JSON.stringify([3,8,9]));
      assert.equal(JSON.stringify(ds.searchDepth(4,7)), JSON.stringify([4,5,7]));
      assert.equal(JSON.stringify(ds.searchDepth(1,103)), JSON.stringify([]));
    });
  });

  describe ("#1) searchBreadth -> [ addVertice(), addEdge() ]", () => {
    before(function() {
      if (!ds.searchBreadth || !ds.addVertice || !ds.addEdge) {
        this.skip();
      }
    });

    it ("should determine breadth path", () => {
      assert.equal(JSON.stringify(ds.searchBreadth(1,7)), JSON.stringify([1,3,5,7]));
      assert.equal(JSON.stringify(ds.searchBreadth(1,6)), JSON.stringify([1,2,4,6]));
      assert.equal(JSON.stringify(ds.searchBreadth(1,9)), JSON.stringify([1,3,8,9]));
      assert.equal(JSON.stringify(ds.searchBreadth(1,1)), JSON.stringify([]));
      assert.equal(JSON.stringify(ds.searchBreadth(1,103)), JSON.stringify([]));
    });
  });

  describe ("#1) adjacent() -> [ addVertice(), addEdge() ]", () => {
    before(function() {
      if (!ds.adjacent || !ds.addVertice || !ds.addEdge) {
        this.skip();
      }
    });

    it ("should determine adjacency of two vertices", () => {
      assert.isTrue(ds.adjacent(1, 2));
      assert.isTrue(ds.adjacent(1, 3));
      assert.isTrue(ds.adjacent(2, 4));
      assert.isTrue(ds.adjacent(6, 4));

      assert.isFalse(ds.adjacent(2, 3));
      assert.isFalse(ds.adjacent(3, 2));
      assert.isFalse(ds.adjacent(1, 101));
    });
  });

  describe ("#1) connected() -> [ addVertice(), addEdge() ]", () => {
    before(function() {
      if (!ds.connected || !ds.addVertice || !ds.addEdge) {
        this.skip();
      }
    });

    it ("should determine connection of two vertices", () => {
      assert.isTrue(ds.connected(1, 2));
      assert.isTrue(ds.connected(1, 7));
      assert.isTrue(ds.connected(4, 7));

      assert.isFalse(ds.connected(7, 1));
      assert.isFalse(ds.connected(3, 4));
      assert.isFalse(ds.connected(1, 101));
    });
  });

  describe ("OPTIONAL: reverse() -> [ addVertice(), addEdge(), searchDepth() ]", () => {
    before(function() {
      if (!ds.reverse || !ds.addVertice || !ds.addEdge || !ds.searchDepth) {
        this.skip();
      }
    });
  
    it ("should reverse the graph", () => {
      assert.isTrue(ds.searchDepth(1,6).length > 0);
      assert.isTrue(ds.searchDepth(6,1).length === 0);

      ds.reverse();
      assert.isTrue(ds.searchDepth(1,6).length === 0);
      assert.isTrue(ds.searchDepth(6,1).length > 0);
      assert.isTrue(ds.searchDepth(7,4).length > 0);
    });

    it ("should reverse the graph back", () => {
      assert.isTrue(ds.searchDepth(1,6).length > 0);
      assert.isTrue(ds.searchDepth(6,1).length === 0);

      ds.reverse();
      ds.reverse();

      assert.isTrue(ds.searchDepth(1,6).length > 0);
      assert.isTrue(ds.searchDepth(6,1).length === 0);
    });
  });

  describe ("OPTIONAL: preOrder() -> [ addVertice(), addEdge(), searchDepth() ]", () => {
    before(function() {
      if (!ds.preOrder || !ds.addVertice || !ds.addEdge || !ds.searchDepth) {
        this.skip();
      }
    });
  
    it ("should preorder the graph", () => {
      assert.equal(JSON.stringify(ds.preOrder()), JSON.stringify([1,2,4,6,5,7,3,8,9,101,102,103]));
    });
  });

  describe ("OPTIONAL: postOrder() -> [ addVertice(), addEdge(), searchDepth() ]", () => {
    before(function() {
      if (!ds.postOrder || !ds.addVertice || !ds.addEdge || !ds.searchDepth) {
        this.skip();
      }
    });
  
    it ("should postorder the graph", () => {
      assert.equal(JSON.stringify(ds.postOrder()), JSON.stringify([6,7,5,4,2,9,8,3,1,102,103,101]));
    });
  });

  describe ("OPTIONAL: topoSort() -> [ addVertice(), addEdge() ]", () => {
    before(function() {
      if (!ds.topoSort || !ds.addVertice || !ds.addEdge) {
        this.skip();
      }
    });
    
    beforeEach(function() {
      decache(dsPath);
      ds = require(dsPath);
    });

    it ("should topo sort the graph", () => {
      ds.addVertice(1);
      ds.addVertice(2);
      ds.addVertice(3);
      ds.addVertice(4);
      ds.addVertice(5);
      ds.addVertice(6);
      ds.addVertice(7);
      ds.addVertice(8);
      ds.addVertice(9);

      ds.addEdge(1, 2);
      ds.addEdge(1, 3);
      ds.addEdge(2, 4);
      ds.addEdge(3, 5);
      ds.addEdge(4, 6);
      ds.addEdge(4, 5);
      ds.addEdge(5, 7);
      ds.addEdge(3, 8);
      ds.addEdge(8, 9);

      const a = ds.topoSort();
      assert.equal(a.length, 9);
      assert.isTrue(a.indexOf(1) < a.indexOf(2) && a.indexOf(1) < a.indexOf(3));
      assert.isTrue(a.indexOf(3) < a.indexOf(8) && a.indexOf(8) < a.indexOf(9));
      assert.isTrue(a.indexOf(3) < a.indexOf(8) && a.indexOf(8) < a.indexOf(9));
      assert.isTrue(a.indexOf(2) < a.indexOf(4) && a.indexOf(4) < a.indexOf(5) && a.indexOf(4) < a.indexOf(6));
      assert.isTrue(a.indexOf(5) < a.indexOf(7));
    });

    it ("should return empty array for acylic graph", () => {
      ds.addVertice(1);
      ds.addVertice(2);
      ds.addVertice(3);
      ds.addVertice(4);

      ds.addEdge(1, 2);
      ds.addEdge(2, 3);
      ds.addEdge(3, 4);
      ds.addEdge(4, 1);

      const a = ds.topoSort();
      assert.equal(a.length, 0);
    });
  });
  
  describe ("OPTIONAL: strongComponents() -> [ addVertice(), addEdge() ]", () => {
    before(function() {
      if (!ds.strongComponents || !ds.addVertice || !ds.addEdge) {
        this.skip();
      }
    });
    
    beforeEach(function() {
      decache(dsPath);
      ds = require(dsPath);
    });

    it ("should count each vertice as a strong component", () => {
      ds.addVertice(1);
      ds.addVertice(2);
      ds.addVertice(3);
      ds.addVertice(4);
      ds.addVertice(5);

      ds.addEdge(1, 2);
      ds.addEdge(1, 3);
      ds.addEdge(2, 4);
      ds.addEdge(3, 5);
      ds.addEdge(4, 5);

      assert.equal(ds.strongComponents(), 5);
    });

    it ("should find a single strong component", () => {
      ds.addVertice(1);
      ds.addVertice(2);
      ds.addVertice(3);
      ds.addVertice(4);
      ds.addVertice(5);

      ds.addEdge(1, 2);
      ds.addEdge(1, 3);
      ds.addEdge(2, 4);
      ds.addEdge(3, 5);
      ds.addEdge(4, 5);
      ds.addEdge(5, 4);

      assert.equal(ds.strongComponents(), 4);
    });

    it ("should find multiple strong components", () => {
      ds.addVertice(1);
      ds.addVertice(2);
      ds.addVertice(3);
      ds.addVertice(4);
      ds.addVertice(5);

      ds.addEdge(1, 2);
      ds.addEdge(1, 3);
      ds.addEdge(2, 4);
      ds.addEdge(3, 5);
      ds.addEdge(4, 5);
      ds.addEdge(5, 4);
      ds.addEdge(2, 3);
      ds.addEdge(3, 1);

      assert.equal(ds.strongComponents(), 2);
    });
  });

  describe ("OPTIONAL: acylic() -> [ addVertice(), addEdge() ]", () => {
    before(function() {
      if (!ds.acylic || !ds.addVertice || !ds.addEdge) {
        this.skip();
      }
    });

    beforeEach(() => {
      decache(dsPath);
      ds = require(dsPath);
    });
  
    it ("should determine if acylic", () => {
      ds.addVertice(1);
      ds.addVertice(2);
      ds.addVertice(3);
      ds.addVertice(4);
      ds.addVertice(5);
  
      ds.addEdge(1, 2);
      ds.addEdge(2, 3);
      ds.addEdge(3, 4);
      ds.addEdge(1, 5);
      ds.addEdge(5, 3);

      assert.isTrue(ds.acylic());
    });

    it ("should determine if not acylic", () => {
      ds.addVertice(1);
      ds.addVertice(2);
      ds.addVertice(3);
      ds.addVertice(4);
      ds.addVertice(5);
  
      ds.addEdge(1, 2);
      ds.addEdge(2, 3);
      ds.addEdge(3, 4);
      ds.addEdge(5, 5);
      ds.addEdge(1, 5);
      ds.addEdge(5, 1);

      assert.isFalse(ds.acylic());
    });
  });
});