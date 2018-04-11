/**
 * unit test
 */

const assert = require("chai").assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/stack/source.js';
let ds = require(dsPath);

describe ("Stack - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);;
  });

  describe("#1) push() -> [ toArray() ]", () => {
    before(function() {
      if (!ds.push || !ds.toArray) {
        this.skip();
      }
    });

    it ("should push to stack", () => {
      ds.push(1);
    });

    it ("should push to stack in correct order", () => {
      ds.push(1);
      ds.push(2);
      ds.push(3);

      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,3]));
    });
  });

  describe("#2) pop() -> [ push(), toArray() ]", () => {
    before(function() {
      if (!ds.pop || !ds.push || !ds.toArray) {
        this.skip();
      }
    });

    it ("should pop from empty stack", () => {
      assert.equal(ds.pop(), undefined);
    });

    it ("should pop from stack", () => {
      ds.push(1);
      assert.equal(ds.pop(), 1);
    });

    it ("should pop from stack in correct order", () => {
      ds.push(1);
      ds.push(2);
      ds.push(3);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2,3]));

      assert.equal(ds.pop(), 3);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1,2]));

      assert.equal(ds.pop(), 2);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([1]));

      assert.equal(ds.pop(), 1);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([]));

      assert.equal(ds.pop(), undefined);
    });
  });

  describe("#2) peek() -> [ push(), toArray() ]", () => {
    before(function() {
      if (!ds.peek || !ds.push || !ds.toArray) {
        this.skip();
      }
    });

    it ("should peek at next value", () => {
      ds.push(1);
      ds.push(2);
      ds.push(3);
      ds.push(3);

      assert.equal(ds.peek(), 3);
    });

    it ("should not remove value after peek", () => {
      ds.push(1);
      ds.push(2);
      ds.push(3);
      ds.push(3);

      assert.equal(ds.peek(), 3);
      assert.equal(ds.peek(), 3);
    });
  });

  describe("#3) size() -> [ pop(), push(), toArray() ]", () => {
    before(function() {
      if (!ds.size || !ds.pop || !ds.push || !ds.toArray) {
        this.skip();
      }
    });

    it ("should set default size", () => {;
      assert.equal(ds.size(), 0);
    });

    it ("should update size on push", () => {;
      ds.push(1);
      assert.equal(ds.size(), 1);

      ds.push(1);
      ds.push(1);
      ds.push(1);
      assert.equal(ds.size(), 4);
    });

    it ("should update size on push", () => {;
      ds.push(1);
      ds.push(1);
      ds.push(1);
      ds.push(1);

      ds.pop();
      assert.equal(ds.size(), 3);

      ds.pop();
      ds.pop();
      assert.equal(ds.size(), 1);
    });

    it ("should not have a negative size", () => {;
      ds.push(1);
      
      ds.pop();
      ds.pop();
      assert.equal(ds.size(), 0);
    });
  });
});