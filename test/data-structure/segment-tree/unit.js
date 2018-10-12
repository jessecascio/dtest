/**
 * unit test
 */

const assert = require("chai").assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/segment-tree/source.js';
let ds = require(dsPath);

describe("Segment Tree - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("#1) update() -> [ init() ]", () => {
    before(function() {
      if (!ds.update || !ds.init) {
        this.skip();
      }
    });

    it ("should update values", () => {
      
    });
  });

  describe("#2) sum() -> [ init(), update() ]", () => {
    before(function() {
      if (!ds.sum || !ds.update || !ds.init) {
        this.skip();
      }
    });

    it ("should return sum", () => {
  
    });

  });
});