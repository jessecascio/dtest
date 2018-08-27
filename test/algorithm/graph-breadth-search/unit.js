/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-breadth/source.js';
const gPath = './../../../src/data-structure/graph-undirected/source.js';

let ds = require(dsPath);
let graph;

describe("Graph Breadth First Search - Unit Tests", async () => {

  beforeEach(() => {
    decache(gPath);
    graph = require(gPath);

    graph.addVertice(1);
    graph.addVertice(2);
    graph.addVertice(3);
    graph.addVertice(4);
    graph.addVertice(5);
    graph.addVertice(6);
    graph.addVertice(7);
    graph.addVertice(8);
    graph.addVertice(9);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 6);
    graph.addEdge(4, 5);
    graph.addEdge(5, 7);
    graph.addEdge(3, 8);
    graph.addEdge(8, 9);

    graph.addVertice(101);
    graph.addVertice(102);
    graph.addVertice(103);

    graph.addEdge(101, 102);
    graph.addEdge(101, 103);
  });

  describe("search()", () => {
    before(function() {
      if (!ds.search) {
        this.skip();
      }
    });

    it ("should determine breadth path", () => {
      const g = JSON.parse(graph.toString());
      assert.equal(JSON.stringify(ds.search(g,1,7)), JSON.stringify([1,3,5,7]));
      assert.equal(JSON.stringify(ds.search(g,7,1)), JSON.stringify([7,5,3,1]));
      assert.equal(JSON.stringify(ds.search(g,6,1)), JSON.stringify([6,4,2,1]));
      assert.equal(JSON.stringify(ds.search(g,6,9)), JSON.stringify([6,4,5,3,8,9]));
      assert.equal(JSON.stringify(ds.search(g,6,3)), JSON.stringify([6,4,5,3]));
      assert.equal(JSON.stringify(ds.search(g,1,1)), JSON.stringify([]));
      assert.equal(JSON.stringify(ds.search(g,1,103)), JSON.stringify([]));
    });

  });
});
