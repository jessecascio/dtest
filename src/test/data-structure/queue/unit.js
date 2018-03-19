/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../data-structure/queue/source.js');

describe("Queue - Unit Tests", async () => {
  beforeEach(() => {
    ds.clear();
  });

  describe("#enqueue", () => {
    it ("should push to queue", () => {
      ds.enqueue(1);
    });

    it ("should enqueue to queue in correct order", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);

      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([3,2,1]));
    });

    it ("should update size", () => {;
      assert.equal(ds.size(), 0);
      ds.enqueue(1);
      assert.equal(ds.size(), 1);
    });

    it ("should update empty check", () => {
      assert.isTrue(ds.isEmpty());
      ds.enqueue(1);
      assert.isFalse(ds.isEmpty());
    });
  });

  describe("#dequeue", () => {
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

    it ("should update size", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);
      assert.equal(ds.size(), 3);

      ds.dequeue();
      assert.equal(ds.size(), 2);
    });

    it ("should update empty check", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      assert.isFalse(ds.isEmpty());

      ds.dequeue();
      assert.isFalse(ds.isEmpty());

      ds.dequeue();
      assert.isTrue(ds.isEmpty());
    });
  });

  describe("#isEmpty", () => {
    it ("should handle no inputs", () => {
      assert.isTrue(ds.isEmpty());
    });

    it ("should track empty", () => {
      assert.isTrue(ds.isEmpty());

      ds.enqueue(1);
      assert.isFalse(ds.isEmpty());

      ds.enqueue(1);
      assert.isFalse(ds.isEmpty());

      ds.dequeue();
      assert.isFalse(ds.isEmpty());

      ds.dequeue();
      assert.isTrue(ds.isEmpty());
    });
  });

  describe("#size", () => {
    it ("should handle no inputs", () => {
      assert.equal(ds.size(), 0);
    });

    it ("should track size", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);

      assert.equal(ds.size(), 3);
    });
  });

  describe("#clear", () => {
    it ("should reset data structure", () => {
      ds.enqueue(1);
      ds.enqueue(1);
      ds.enqueue(1);
      assert.equal(ds.size(), 3);

      ds.clear();
      assert.equal(ds.size(), 0);
    });
  });

  describe("#toArray", () => {
    it ("should represent data structure", () => {
      ds.enqueue(1);
      ds.enqueue(2);
      ds.enqueue(3);

      assert.equal(JSON.stringify(ds.toArray()), JSON.stringify([3,2,1]));
    });
  });
});
