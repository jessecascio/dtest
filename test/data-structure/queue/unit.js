/**
 * unit test
 */

const assert = require("chai").assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/queue/source.js';
let ds = require(dsPath);

describe ("Queue - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("#1) enqueue() -> [ toArray() ]", () => {
    before(function() {
      if (!ds.enqueue || !ds.toArray) {
        this.skip();
      }
    });

    it ("should push to queue", () => {
      ds.enqueue(1);
    });

    it ("should enqueue to queue in correct order", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);

      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([3,2,1]));
    });
  });

  describe("#2) dequeue() -> [ enqueue() ]", () => {
    before(function() {
      if (!ds.enqueue || !ds.dequeue || !ds.toArray) {
        this.skip();
      }
    });

    it ("should dequeue from empty queue", () => {
      assert.equal(ds.dequeue(), undefined);
    });

    it ("should dequeue from queue", () => {
      ds.enqueue(1);
      assert.equal(ds.dequeue(), 1);
    });

    it ("should dequeue from queue in correct order", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([3,2,1]));

      assert.equal(ds.dequeue(), 1);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([3,2]));

      assert.equal(ds.dequeue(), 2);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([3]));

      assert.equal(ds.dequeue(), 3);
      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([]));

      assert.equal(ds.dequeue(), undefined);
    });
  });

  describe("#2) peek() -> [ enqueue() ]", () => {
    before(function() {
      if (!ds.peek || !ds.enqueue || !ds.toArray) {
        this.skip();
      }
    });

    it ("should peek at next value", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);
      ds.enqueue(3);

      assert.equal(ds.peek(), 1);
    });

    it ("should not remove value after peek", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);
      ds.enqueue(3);

      assert.equal(ds.peek(), 1);
      assert.equal(ds.peek(), 1);
    });
  });

  describe("#3) size() -> [ enqueue(), dequeue() ]", () => {
    before(function() {
      if (!ds.size || !ds.enqueue || !ds.dequeue || !ds.toArray) {
        this.skip();
      }
    });

    it ("should set default size", () => {;
      assert.equal(ds.size(), 0);
    });

    it ("should update size on enqueue", () => {;
      ds.enqueue(1);
      assert.equal(ds.size(), 1);
    });

    it ("should update size on dequeue", () => {;
      ds.enqueue(1);
      ds.enqueue(2);
      ds.dequeue();

      assert.equal(ds.size(), 1);
    });

    it ("should not be negative", () => {;
      ds.enqueue(1);
      ds.enqueue(2);

      ds.dequeue();
      ds.dequeue();
      ds.dequeue();

      assert.equal(ds.size(), 0);
    });
  });
});