/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-topological-sort/source.js';
let ds = require(dsPath);

const graph = require(`${process.cwd()}/src/data-structure/graph-directed/source`);

describe("Graph Topological Sort - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("sort()", () => {
    before(function() {
      if (!ds.sort) {
        this.skip();
        return;
      }

      graph.addVertice(0);
      graph.addVertice(1);
      graph.addVertice(2);
      graph.addVertice(3);
      graph.addVertice(4);
      graph.addVertice(5);
      graph.addVertice(6);
      graph.addVertice(7);
      graph.addVertice(8);
      graph.addVertice(9);
      graph.addVertice(10);
      graph.addVertice(11);
      graph.addVertice(12);

      graph.addEdge(0,6);
      graph.addEdge(0,1);
      graph.addEdge(0,5);
      graph.addEdge(2,0);
      graph.addEdge(2,3);
      graph.addEdge(3,5);
      graph.addEdge(5,4);
      graph.addEdge(6,4);
      graph.addEdge(6,9);
      graph.addEdge(9,10);
      graph.addEdge(9,11);
      graph.addEdge(9,12);
      graph.addEdge(11,12);
      graph.addEdge(8,7);
      graph.addEdge(7,6);
    });

    it ("should handle an empty graph", () => {
      const a = ds.sort({});
      assert.equal(JSON.stringify(a), JSON.stringify([]));
    });

    it ("should sort the graph", () => {
      const g = JSON.parse(graph.toString());
      const a = ds.sort(g);

      assert.equal(JSON.stringify(a), JSON.stringify([8,7,2,3,0,5,1,6,9,11,12,10,4]));
    });
    
    it ("should return empty set for graph w/ cycle", () => {
      graph.addEdge(12,9);

      const g = JSON.parse(graph.toString());
      const a = ds.sort(g);

      assert.equal(JSON.stringify(a), JSON.stringify([]));
    });
  });
});
