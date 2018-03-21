/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../data-structure/stack/source.js');

describe("Stack - Unit Tests", async () => {
  before(function() {
    ['toArray', 'reset', 'size'].map((f) => {
      if (!ds[f]) {
        assert.fail(null, true, `Function Required: ${f}()`)
      }
    });
  });

  beforeEach(() => {
    ds.reset();
  });

  describe("#push", () => {
    before(function() {
      if (!ds.push) {
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

    it ("should update size", () => {;
      assert.equal(ds.size(), 0);
      ds.push(1);
      assert.equal(ds.size(), 1);
    });

    it ("should update empty check", () => {
      assert.isTrue(ds.isEmpty());
      ds.push(1);
      assert.isFalse(ds.isEmpty());
    });
  });

  describe("#pop", () => {
    before(function() {
      if (!ds.pop) {
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

    it ("should update size", () => {
      ds.push(1);
      ds.push(2);
      ds.push(3);
      assert.equal(ds.size(), 3);

      ds.pop();
      assert.equal(ds.size(), 2);
    });

    it ("should update empty check", () => {
      ds.push(1);
      ds.push(2);
      assert.isFalse(ds.isEmpty());

      ds.pop();
      assert.isFalse(ds.isEmpty());

      ds.pop();
      assert.isTrue(ds.isEmpty());
    });
  });
});