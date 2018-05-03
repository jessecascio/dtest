/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-dijkstra/source.js';
let ds = require(dsPath);

describe("Graph Dijkstra - Unit Tests", async () => {

  describe("distTo()", () => {
    before(function() {
      if (!ds.distTo) {
        this.skip();
      }
    });

    let graph;
    before(function() {
      decache(dsPath);
      ds = require(dsPath);

      graph = {
        'a': [['b',7],['c',3]],
        'b': [['a',7],['c',1],['d',2],['e',6]],
        'c': [['a',3],['b',1],['d',2]],
        'd': [['b',2],['c',2],['e',4]],
        'e': [['b',6],['d',4]]
      };
    });

    it ("should return 0 for same source and destination", () => {
      assert.equal(ds.distTo(graph,'a','a'), 0);
      assert.equal(ds.distTo(graph,'e','e'), 0);
    });

    it ("should return -1 for non existant paths", () => {
      assert.equal(ds.distTo(graph,'a','f'), -1);
      assert.equal(ds.distTo(graph,'f','e'), -1);
    });

    it ("should find the shortest path to all vertices from same source", () => {
      assert.equal(ds.distTo(graph,'a','b'), 4);
      assert.equal(ds.distTo(graph,'a','c'), 3);
      assert.equal(ds.distTo(graph,'a','d'), 5);
      assert.equal(ds.distTo(graph,'a','e'), 9);
    });

    it ("should find the shortest path from various sources", () => {
      assert.equal(ds.distTo(graph,'b','a'), 4);
      assert.equal(ds.distTo(graph,'b','d'), 2);
      assert.equal(ds.distTo(graph,'b','e'), 6);

      assert.equal(ds.distTo(graph,'c','e'), 6);
      
      assert.equal(ds.distTo(graph,'e','c'), 6);
      assert.equal(ds.distTo(graph,'e','a'), 9);
    });
  });

  describe("pathTo()", () => {
    before(function() {
      if (!ds.pathTo) {
        this.skip();
      }
    });

    let graph;
    before(function() {
      decache(dsPath);
      ds = require(dsPath);

      graph = {
        'a': [['b',7],['c',3]],
        'b': [['a',7],['c',1],['d',2],['e',6]],
        'c': [['a',3],['b',1],['d',2]],
        'd': [['b',2],['c',2],['e',4]],
        'e': [['b',6],['d',4]]
      };
    });

    it ("should return path for same source and destination", () => {
      assert.equal(JSON.stringify(ds.pathTo(graph,'a','a')), JSON.stringify(['a']));
      assert.equal(JSON.stringify(ds.pathTo(graph,'e','e')), JSON.stringify(['e']));
    });

    it ("should return an empty array for non existant paths", () => {
      assert.equal(JSON.stringify(ds.pathTo(graph,'a','f')), JSON.stringify([]));
      assert.equal(JSON.stringify(ds.pathTo(graph,'f','e')), JSON.stringify([]));
    });

    it ("should find the shortest path to all vertices from same source", () => {
      assert.equal(JSON.stringify(ds.pathTo(graph,'a','b')), JSON.stringify(['a','c','b']));
      assert.equal(JSON.stringify(ds.pathTo(graph,'a','c')), JSON.stringify(['a','c']));
      assert.equal(JSON.stringify(ds.pathTo(graph,'a','d')), JSON.stringify(['a','c','d']));
      assert.equal(JSON.stringify(ds.pathTo(graph,'a','e')), JSON.stringify(['a','c','d','e']));
    });

    it ("should find the shortest path from various sources", () => {
      assert.equal(JSON.stringify(ds.pathTo(graph,'b','a')), JSON.stringify(['b','c','a']));
      assert.equal(JSON.stringify(ds.pathTo(graph,'b','d')), JSON.stringify(['b','d']));
      assert.equal(JSON.stringify(ds.pathTo(graph,'b','e')), JSON.stringify(['b','e']));

      assert.equal(JSON.stringify(ds.pathTo(graph,'c','e')), JSON.stringify(['c','d','e']));

      assert.equal(JSON.stringify(ds.pathTo(graph,'e','c')), JSON.stringify(['e','d','c']));
      assert.equal(JSON.stringify(ds.pathTo(graph,'e','a')), JSON.stringify(['e','d','c','a']));
    });
  });
});
