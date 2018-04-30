/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-kosaraju/source.js';
let ds = require(dsPath);

const gPath = `${process.cwd()}/src/data-structure/graph-directed/source`;
let graph = require(gPath);

describe("Graph Kosaraju - Unit Tests", async () => {

  describe("components()", () => {
    before(function() {
      if (!ds.components) {
        this.skip();
      }
    });

    beforeEach(function() {
      decache(dsPath);
      ds = require(dsPath);

      decache(gPath);
      graph = require(gPath);
    });

    it ("should count each vertice as a strong component", () => {
      graph.addVertice(1);
      graph.addVertice(2);
      graph.addVertice(3);
      graph.addVertice(4);
      graph.addVertice(5);

      graph.addEdge(1, 2);
      graph.addEdge(1, 3);
      graph.addEdge(2, 4);
      graph.addEdge(3, 5);
      graph.addEdge(4, 5);

      const g = JSON.parse(graph.toString());
      assert.equal(ds.components(g), 5);
    });

    it ("should find a single strong component", () => {
      graph.addVertice(1);
      graph.addVertice(2);
      graph.addVertice(3);
      graph.addVertice(4);
      graph.addVertice(5);

      graph.addEdge(1, 2);
      graph.addEdge(1, 3);
      graph.addEdge(2, 4);
      graph.addEdge(3, 5);
      graph.addEdge(4, 5);
      graph.addEdge(5, 4);

      const g = JSON.parse(graph.toString());
      assert.equal(ds.components(g), 4);
    });

    it ("should find multiple strong components", () => {
      graph.addVertice(1);
      graph.addVertice(2);
      graph.addVertice(3);
      graph.addVertice(4);
      graph.addVertice(5);

      graph.addEdge(1, 2);
      graph.addEdge(1, 3);
      graph.addEdge(2, 4);
      graph.addEdge(3, 5);
      graph.addEdge(4, 5);
      graph.addEdge(5, 4);
      graph.addEdge(2, 3);
      graph.addEdge(3, 1);

      const g = JSON.parse(graph.toString());
      assert.equal(ds.components(g), 2);
    });
  });
});
