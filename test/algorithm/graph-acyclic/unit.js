/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-acyclic/source.js';
let ds = require(dsPath);

const graph = require(`${process.cwd()}/src/data-structure/graph-directed/source`);

describe("Graph Acyclic - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("acyclic()", () => {
    before(function() {
      if (!ds.acyclic) {
        this.skip();
        return;
      }
      
      graph.reset();

      graph.addVertice(1);
      graph.addVertice(2);
      graph.addVertice(3);
      graph.addVertice(4);
      graph.addVertice(5);

      graph.addEdge(1, 2);
      graph.addEdge(1, 4);
      graph.addEdge(2, 3);
      graph.addEdge(2, 5);
      graph.addEdge(4, 2);
    });
    
    it ("should determine if graph is acyclic", () => {
      const g = JSON.parse(graph.toString());
      assert.equal(ds.acyclic(g), true);
    });

    it ("should determine if graph is not acyclic", () => {
      graph.addEdge(2, 1);
      const g = JSON.parse(graph.toString());
      assert.equal(ds.acyclic(g), false);
    });
  });

});
