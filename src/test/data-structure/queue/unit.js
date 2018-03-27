/**
 * unit test
 */

const assert = require("chai").assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../data-structure/queue/source.js';
let ds = require(dsPath);

describe("Queue - Unit Tests", async () => {
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

  describe("#2) dequeue() -> [ enqueue(), toArray() ]", () => {
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
});

/*
it ("should update size", () => {;
      assert.equal(ds.size(), 0);
      ds.enqueue(1);
      assert.equal(ds.size(), 1);
    });

it ("should update size", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);
      assert.equal(ds.size(), 3);

      ds.dequeue();
      assert.equal(ds.size(), 2);
    });

    */