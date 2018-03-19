/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../data-structure/graph-undirected/source.js');

describe("Undirected Graph - Unit Tests", async () => {
  beforeEach(() => {
    ds.clear();

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

  describe ("#connected", () => {
    it ("should determine connection of two vertices", () => {
      assert.isTrue(ds.connected(1, 2));
      assert.isTrue(ds.connected(1, 7));
      assert.isTrue(ds.connected(4, 7));

      assert.isFalse(ds.connected(1, 101));
    });
  });

  describe ("#searchDepth", () => {
    it ("should determine depth path", () => {
      assert.equal(JSON.stringify(ds.searchDepth(1,7)), JSON.stringify([1,2,4,5,7]));
      assert.equal(JSON.stringify(ds.searchDepth(6,1)), JSON.stringify([6,4,2,1]));
      assert.equal(JSON.stringify(ds.searchDepth(6,9)), JSON.stringify([6,4,2,1,3,8,9]));
      assert.equal(JSON.stringify(ds.searchDepth(1,1)), JSON.stringify([]));
    });
  });

  describe ("#searchBreadth", () => {
    it ("should determine breadth path", () => {
      assert.equal(JSON.stringify(ds.searchBreadth(1,7)), JSON.stringify([1,3,5,7]));
      assert.equal(JSON.stringify(ds.searchBreadth(6,1)), JSON.stringify([6,4,2,1]));
      assert.equal(JSON.stringify(ds.searchBreadth(6,9)), JSON.stringify([6,4,5,3,8,9]));
      assert.equal(JSON.stringify(ds.searchBreadth(1,1)), JSON.stringify([]));
    });
  });

  describe ("#components", () => {
    it ("should determine components", () => {
      assert.equal(ds.components(), 2);
    });
  });

  describe ("#separation", () => {
    it ("should separation between two vertices", () => {
      assert.equal(ds.separation(1, 6), 3);
      assert.equal(ds.separation(1, 9), 3);
      assert.equal(ds.separation(1, 1), 0);
    });
  });

  describe ("#acylic", () => {
    it ("should determine if acylic", () => {
      ds.clear();

      ds.addVertice(101);
      ds.addVertice(102);
      ds.addVertice(103);

      ds.addEdge(101, 102);
      ds.addEdge(101, 103);

      assert.isTrue(ds.acylic());
    });

    it ("should determine if not acylic", () => {
      assert.isFalse(ds.acylic());
    });
  });
});