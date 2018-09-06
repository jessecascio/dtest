/**
 * unit test
 */

const assert = require('chai').assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/algorithm/graph-kruskal/source.js';
let ds = require(dsPath);

describe("Graph Kruskal - Unit Tests", async () => {
  describe ("mst()", () => {
    before(function() {
      if (!ds.mst) {
        this.skip();
      }
    });

    it ("should return path w/ all nodes", () => {
      const graph = {
        'a': [['b',7],['c',3]],
        'b': [['a',7],['c',1],['d',2],['e',6]],
        'c': [['a',3],['b',1],['d',2]],
        'd': [['b',2],['c',2],['e',4]],
        'e': [['b',6],['d',4]]
      };

      assert.equal(ds.mst(graph).length, 5);
    });

    it ("should return path w/ multiple edge nodes", () => {
      const graph = {
        'a': [['b',7],['c',3]],
        'b': [['a',7],['c',1],['d',2],['e',6],['g',3]],
        'c': [['a',3],['b',1],['d',2]],
        'd': [['b',2],['c',2],['e',4]],
        'e': [['b',6],['d',4],['f',2]],
        'f': [['e',2],['g',1]],
        'g': [['f',1],['c',3]]
      };

      assert.equal(ds.mst(graph).length, 7);
    });
  });

  describe("weight()", () => {
    before(function() {
      if (!ds.weight) {
        this.skip();
      }
    });

    it ("should return correct minimum spanning tree weight", () => {
      const graph = {
        'a': [['b',7],['c',3]],
        'b': [['a',7],['c',1],['d',2],['e',6]],
        'c': [['a',3],['b',1],['d',2]],
        'd': [['b',2],['c',2],['e',4]],
        'e': [['b',6],['d',4]]
      };
      assert.equal(ds.weight(graph), 10);
    });

    it ("should return correct weight w/ multiple edge nodes", () => {
      const graph = {
        'a': [['b',7],['c',3]],
        'b': [['a',7],['c',1],['d',2],['e',6]],
        'c': [['a',3],['b',1],['d',2]],
        'd': [['b',2],['c',2],['e',4]],
        'e': [['b',6],['d',4],['f',2]],
        'f': [['e',2],['g',1]],
        'g': [['f',1]]
      };

      assert.equal(ds.weight(graph), 13);
    });
  });
});
