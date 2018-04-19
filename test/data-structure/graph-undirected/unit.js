/**
 * unit test
 */

const assert = require("chai").assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/graph-undirected/source.js';
let ds = require(dsPath);

describe("Undirected Graph - Unit Tests", async () => {

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
      assert.equal(JSON.stringify(ds.searchDepth(7,1)), JSON.stringify([7,5,3,1]));
      assert.equal(JSON.stringify(ds.searchDepth(6,1)), JSON.stringify([6,4,2,1]));
      assert.equal(JSON.stringify(ds.searchDepth(6,9)), JSON.stringify([6,4,2,1,3,8,9]));
      assert.equal(JSON.stringify(ds.searchDepth(6,3)), JSON.stringify([6,4,2,1,3]));
      assert.equal(JSON.stringify(ds.searchDepth(1,1)), JSON.stringify([]));
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
      assert.equal(JSON.stringify(ds.searchBreadth(7,1)), JSON.stringify([7,5,3,1]));
      assert.equal(JSON.stringify(ds.searchBreadth(6,1)), JSON.stringify([6,4,2,1]));
      assert.equal(JSON.stringify(ds.searchBreadth(6,9)), JSON.stringify([6,4,5,3,8,9]));
      assert.equal(JSON.stringify(ds.searchBreadth(6,3)), JSON.stringify([6,4,5,3]));
      assert.equal(JSON.stringify(ds.searchBreadth(1,1)), JSON.stringify([]));
      assert.equal(JSON.stringify(ds.searchBreadth(1,103)), JSON.stringify([]));
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
      assert.isTrue(ds.connected(7, 1));
      assert.isTrue(ds.connected(4, 7));

      assert.isFalse(ds.connected(1, 101));
    });
  });
});