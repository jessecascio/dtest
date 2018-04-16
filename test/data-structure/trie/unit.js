/**
 * unit test
 */

const assert = require("chai").assert;
const decache = require('decache');
const util = require('./../../util.js');

const dsPath = util.input.s || './../../../src/data-structure/trie/source.js';
let ds = require(dsPath);

describe("Trie - Unit Tests", async () => {
  beforeEach(() => {
    decache(dsPath);
    ds = require(dsPath);
  });

  describe("#1) put() -> [ toJson() ]", () => {
    before(function() {
      if (!ds.put || !ds.toJson) {
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

  describe("#2) get() -> [ put() ]", () => {
    before(function() {
      if (!ds.get || !ds.put || !ds.toJson) {
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

  describe("#3) remove() -> [ put(), get() ]", () => {
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

    it ("should ignore sub keys", () => {
      ds.put("help", 1);

      ds.remove("hel");
      assert.equal(ds.get("help"), 1);

      ds.remove("helpp");
      assert.equal(ds.get("help"), 1);
    });
  });

  describe("#4) keys() -> [ put(), remove() ]", () => {
    before(function() {
      if (!ds.keys || !ds.put || !ds.remove || !ds.toJson) {
        this.skip();
      }
    });

    it ("should handle no value", () => {
      assert.equal(ds.keys().length, 0);
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);

      const ks = ds.keys();
      assert.equal(ks.length, 1);
      assert.isTrue(ks.indexOf("hello") !== -1);
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("joy", 2);
      
      const ks = ds.keys();
      assert.equal(ks.length, 3);
      assert.isTrue(ks.indexOf("hello") !== -1);
      assert.isTrue(ks.indexOf("hyper") !== -1);
      assert.isTrue(ks.indexOf("joy") !== -1);
    });

    it ("should acount for put and remove", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("joy", 2);
      
      ds.remove("hyper");

      let ks = ds.keys();
      assert.equal(ks.length, 2);
      assert.isTrue(ks.indexOf("hello") !== -1);
      assert.isTrue(ks.indexOf("hyper") === -1);
      assert.isTrue(ks.indexOf("joy") !== -1);
      
      ds.remove("joy");
      ks = ds.keys();
      assert.equal(ks.length, 1);
      assert.isTrue(ks.indexOf("hello") !== -1);
      assert.isTrue(ks.indexOf("joy") === -1);

      ds.put("hecter", 8);
      ks = ds.keys();
      assert.equal(ks.length, 2);
      assert.isTrue(ks.indexOf("hello") !== -1);
      assert.isTrue(ks.indexOf("hecter") !== -1);
    });

    it ("should handle sub keys", () => {
      ds.put("hello", 5);
      ds.put("hel", 6);
      ds.put("helloo", 2);
      ds.put("help", 6);
      
      let ks = ds.keys();
      assert.equal(ks.length, 4);
      assert.isTrue(ks.indexOf("hello") !== -1);
      assert.isTrue(ks.indexOf("hel") !== -1);
      assert.isTrue(ks.indexOf("helloo") !== -1);
      assert.isTrue(ks.indexOf("help") !== -1);
    });
  });

  describe("#4) keysWithPrefix() -> [ put(), remove() ]", () => {
    before(function() {
      if (!ds.keysWithPrefix || !ds.put || !ds.remove || !ds.toJson) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.put('hello', 5);

      let ks = ds.keysWithPrefix('hel');
      assert.equal(ks.length, 1);
      assert.isTrue(ks.indexOf('hello') !== -1);

      ks = ds.keysWithPrefix('hello');
      assert.equal(ks.length, 1);
      assert.isTrue(ks.indexOf('hello') !== -1);

      ks = ds.keysWithPrefix('helloh');
      assert.equal(ks.length, 0);
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);
      
      let ks;
      
      ks = ds.keysWithPrefix('h');
      assert.equal(ks.length, 3);
      assert.isTrue(ks.indexOf('hello') !== -1);
      assert.isTrue(ks.indexOf('heckle') !== -1);
      assert.isTrue(ks.indexOf('hyper') !== -1);

      ks = ds.keysWithPrefix('he');
      assert.equal(ks.length, 2);
      assert.isTrue(ks.indexOf('hello') !== -1);
      assert.isTrue(ks.indexOf('heckle') !== -1);

      ks = ds.keysWithPrefix('hy');
      assert.equal(ks.length, 1);
      assert.isTrue(ks.indexOf('hyper') !== -1);

      ks = ds.keysWithPrefix('j');
      assert.equal(ks.length, 1);
      assert.isTrue(ks.indexOf('joy') !== -1);
    });

    it ("should acount for put and remove", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);
      
      let ks;

      ks = ds.keysWithPrefix("h");
      assert.equal(ks.length, 3);

      ds.remove("heckle");
      ks = ds.keysWithPrefix("h");
      assert.equal(ks.length, 2);

      ds.put("hecter", 8);
      ks = ds.keysWithPrefix("h");
      assert.equal(ks.length, 3);

      assert.isTrue(ks.indexOf('hello') !== -1);
      assert.isTrue(ks.indexOf('hecter') !== -1);
      assert.isTrue(ks.indexOf('hyper') !== -1);
    });
  });

  describe("#4) contains() -> [ put(), remove() ]", () => {
    before(function() {
      if (!ds.contains || !ds.put || !ds.remove) {
        this.skip();
      }
    });

    it ("should handle single value", () => {
      ds.put("hello", 5);

      assert.isTrue(ds.contains("hello"));
      assert.isFalse(ds.contains("hell"));
      assert.isFalse(ds.contains("helloo"));
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      
      assert.isTrue(ds.contains("hello"));
      assert.isTrue(ds.contains("hyper"));
      assert.isFalse(ds.contains("hell"));
      assert.isFalse(ds.contains("hype"));
    });

    it ("should handle single char values", () => {
      ds.put("h", 5);
      ds.put("e", 5);

      assert.isTrue(ds.contains("h"));
      assert.isTrue(ds.contains("e"));
      assert.isFalse(ds.contains("he"));
      assert.isFalse(ds.contains("eh"));
    });

    it ("should handle removes", () => {
      ds.put("hy", 5);
      ds.put("hyper", 6);
      ds.put("hyperz", 6);

      ds.remove("heelp");
      assert.isTrue(ds.contains("hy"));
      assert.isTrue(ds.contains("hyper"));
      assert.isTrue(ds.contains("hyperz"));

      ds.remove("hyperz");
      assert.isTrue(ds.contains("hy"));
      assert.isTrue(ds.contains("hyper"));
      assert.isFalse(ds.contains("hyperz"));

      ds.remove("hy");
      assert.isFalse(ds.contains("hy"));
      assert.isTrue(ds.contains("hyper"));
      assert.isFalse(ds.contains("hyperz"));
    });
  });

  describe("#4) size() -> [ put(), remove() ]", () => {
    before(function() {
      if (!ds.size || !ds.put || !ds.remove) {
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

    it ("should handle sub keys", () => {
      ds.put("hello", 5);

      ds.remove("hell");
      assert.equal(ds.size(), 1); 

      ds.remove("helloo");
      assert.equal(ds.size(), 1);
    });
  });
});