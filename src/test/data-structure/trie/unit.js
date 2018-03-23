/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../data-structure/trie/source.js');

describe("Trie - Unit Tests", async () => {
  before(function() {
    ['reset', 'toJson'].map((f) => {
      if (!ds[f]) {
        assert.fail(null, true, `Function Required: ${f}()`)
      }
    });
  });

  beforeEach(() => {
    ds.reset();
  });

  describe("#put", () => {
    before(function() {
      if (!ds.put) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);
      const t = ds.toJson();

      assert.equal(Object.keys(t).length, 1);
      assert.isTrue(typeof t.h !== "undefined");
      assert.isTrue(typeof t.h.e !== "undefined");
      assert.isTrue(typeof t.h.e.l !== "undefined");
      assert.isTrue(typeof t.h.e.l.l !== "undefined");
      assert.isTrue(typeof t.h.e.l.l.o !== "undefined");
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);
      const t = ds.toJson();

      assert.equal(Object.keys(t).length, 2);
      assert.isTrue(typeof t.h.e.l.l.o !== "undefined");
      assert.isTrue(typeof t.h.y.p.e.r !== "undefined");
      assert.isTrue(typeof t.h.e.c.k.l.e !== "undefined");
      assert.isTrue(typeof t.j.o.y !== "undefined");
    });
  });

  describe("#get", () => {
    before(function() {
      if (!ds.get || !ds.put) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);
      assert.equal(ds.get("hello"), 5);
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);
      
      assert.equal(ds.get("hello"), 5);
      assert.equal(ds.get("hyper"), 6);
      assert.equal(ds.get("heckle"), 1);
      assert.equal(ds.get("joy"), 2);
    });
  });

  describe("#remove", () => {
    before(function() {
      if (!ds.remove || !ds.put) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);
      ds.remove("hello");

      assert.equal(ds.get("hello"), undefined);
    });

    it ("should handle non existent value", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);

      ds.remove("hello");
      assert.equal(ds.get("hello"), undefined);

      ds.remove("j");
      ds.remove("xq");
      ds.remove("jasper");

      ds.remove("heckle");
      assert.equal(ds.get("heckle"), undefined);
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);
      
      ds.remove("hello");
      assert.equal(ds.get("hello"), undefined);
      assert.equal(ds.get("hyper"), 6);
      assert.equal(ds.get("heckle"), 1);
      assert.equal(ds.get("joy"), 2);

      ds.remove("hyper");
      assert.equal(ds.get("hyper"), undefined);
      assert.equal(ds.get("heckle"), 1);
      assert.equal(ds.get("joy"), 2);

      ds.remove("heckle");
      assert.equal(ds.get("heckle"), undefined);
      assert.equal(ds.get("joy"), 2);

      ds.remove("joy");
      assert.equal(ds.get("joy"), undefined);
    });

    it ("should remove unused keys", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);

      ds.remove("hello");
      assert.equal(ds.get("hello"), undefined);

      const t = ds.toJson();
      assert.equal(Object.keys(t).length, 2);
      
      assert.isTrue(typeof t.h !== "undefined");
      assert.isTrue(typeof t.h.e !== "undefined");
      assert.isTrue(typeof t.h.e.c !== "undefined");
      assert.isTrue(typeof t.h.e.l === "undefined");
    });

    it ("should remove shorter key", () => {
      ds.put("helper", 5);
      ds.put("help", 1);
      
      ds.remove("help");
      assert.equal(ds.get("help"), undefined);

      const t = ds.toJson();
      assert.equal(Object.keys(t).length, 1);
      
      assert.isTrue(typeof t.h !== "undefined");
      assert.isTrue(typeof t.h.e !== "undefined");
      assert.isTrue(typeof t.h.e.l !== "undefined");
      assert.isTrue(typeof t.h.e.l.p !== "undefined");
      assert.isTrue(typeof t.h.e.l.p.e !== "undefined");
      assert.isTrue(typeof t.h.e.l.p.e.r !== "undefined");

      assert.equal(ds.get("helper"), 5);
    });

    it ("should remove longer key", () => {
      ds.put("helper", 5);
      ds.put("help", 1);
      
      ds.remove("helper");
      assert.equal(ds.get("helper"), undefined);

      const t = ds.toJson();
      assert.equal(Object.keys(t).length, 1);
      
      assert.isTrue(typeof t.h !== "undefined");
      assert.isTrue(typeof t.h.e !== "undefined");
      assert.isTrue(typeof t.h.e.l !== "undefined");
      assert.isTrue(typeof t.h.e.l.p !== "undefined");
      assert.isTrue(typeof t.h.e.l.p.e === "undefined");

      assert.equal(ds.get("help"), 1);
    });
  });

  describe("#keys", () => {
    before(function() {
      if (!ds.keys) {
        this.skip();
      }
    });

    it ("should handle no value", () => {
      assert.equal(JSON.stringify(ds.keys()), JSON.stringify([]));
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);
      assert.equal(JSON.stringify(ds.keys()), JSON.stringify(["hello"]));
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("joy", 2);
      
      assert.equal(JSON.stringify(ds.keys()), JSON.stringify(["hello","hyper","joy"]));
    });

    it ("should acount for put and remove", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("joy", 2);
      
      assert.equal(JSON.stringify(ds.keys()), JSON.stringify(["hello","hyper","joy"]));
      
      ds.remove("hyper");
      assert.equal(JSON.stringify(ds.keys()), JSON.stringify(["hello","joy"]));

      ds.put("hecter", 8);
      assert.equal(JSON.stringify(ds.keys()), JSON.stringify(["hello","hecter","joy"]));
    });
  });

  describe("#keysWithPrefix", () => {
    before(function() {
      if (!ds.keysWithPrefix) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);
      assert.equal(JSON.stringify(ds.keysWithPrefix("hel")), JSON.stringify(["hello"]));
      assert.equal(JSON.stringify(ds.keysWithPrefix("hello")), JSON.stringify(["hello"]));
      assert.equal(JSON.stringify(ds.keysWithPrefix("helloh")), JSON.stringify([]));
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);
      
      assert.equal(JSON.stringify(ds.keysWithPrefix("h")), JSON.stringify(["hello","heckle","hyper"]));
      assert.equal(JSON.stringify(ds.keysWithPrefix("he")), JSON.stringify(["hello","heckle"]));
      assert.equal(JSON.stringify(ds.keysWithPrefix("hyp")), JSON.stringify(["hyper"]));
      assert.equal(JSON.stringify(ds.keysWithPrefix("j")), JSON.stringify(["joy"]));
    });

    it ("should acount for put and remove", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);
      
      assert.equal(JSON.stringify(ds.keysWithPrefix("h")), JSON.stringify(["hello","heckle","hyper"]));
      
      ds.remove("heckle");
      assert.equal(JSON.stringify(ds.keysWithPrefix("h")), JSON.stringify(["hello","hyper"]));

      ds.put("hecter", 8);
      assert.equal(JSON.stringify(ds.keysWithPrefix("h")), JSON.stringify(["hello","hecter","hyper"]));
    });
  });

  describe("#contains", () => {
    before(function() {
      if (!ds.contains) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);
      assert.isTrue(ds.contains("hello"));
      assert.isFalse(ds.contains("hell"));
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      
      assert.isTrue(ds.contains("hello"));
      assert.isTrue(ds.contains("hyper"));
      assert.isFalse(ds.contains("hell"));
      assert.isFalse(ds.contains("hype"));
    });
  });

  describe("#size", () => {
    before(function() {
      if (!ds.get || !ds.put || !ds.remove) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);
      assert.equal(ds.size(), 1); 
    });

    it ("should handle update", () => {
      ds.put("hello", 5);
      ds.put("hello", 6);
      assert.equal(ds.size(), 1); 
    });

    it ("should handle removing a value", () => {
      ds.put("hello", 5);
      ds.put("hype", 6);
      ds.remove("hype");

      assert.equal(ds.size(), 1); 
    });

    it ("should handle removing all values", () => {
      ds.put("hello", 5);
      ds.put("hype", 6);
      ds.remove("hype");
      ds.remove("hello");

      assert.equal(ds.size(), 0); 
    });

    it ("should handle multiple removes", () => {
      ds.put("hello", 5);
      ds.remove("hype");
      assert.equal(ds.size(), 1); 

      ds.remove("hello");
      assert.equal(ds.size(), 0); 

      ds.remove("hello");
      ds.remove("hello");
      assert.equal(ds.size(), 0);
    });

  });
});

// edge cases
//  non string chars