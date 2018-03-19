/**
 * unit test
 */

const assert = require("chai").assert;
const util = require('./../../util.js');

const ds = require(util.input.s || './../../../src/data-structure/trie/source.js');

describe("Trie - Unit Tests", async () => {
  beforeEach(() => {
    ds.clear();
  });

  describe("#put", () => {
    it ("should handle single value", () => {
      ds.put("hello", 5);
      assert.equal(ds.size(), 1);
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      ds.put("heckle", 1);
      ds.put("joy", 2);
      
      assert.equal(ds.size(), 4);
    });
  });

  describe("#get", () => {
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
  });

  describe("#keys", () => {
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

  describe("#isEmpty", () => {
    it ("should handle no values", () => {
      assert.isTrue(ds.isEmpty());
    });

    it ("should handle single value", () => {
      ds.put("hap", 5)
      assert.isFalse(ds.isEmpty());
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      assert.isFalse(ds.isEmpty());
    });

    it ("should handle removing values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      assert.isFalse(ds.isEmpty());

      ds.remove("hello");
      assert.isFalse(ds.isEmpty());

      ds.remove("hyper");
      assert.isTrue(ds.isEmpty());
    });
  });

  describe("#size", () => {
    it ("should handle no values", () => {
      assert.equal(ds.size(), 0);
    });

    it ("should handle single value", () => {
      ds.put("hap", 5)
      assert.equal(ds.size(), 1);
    });

    it ("should handle many values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      assert.equal(ds.size(), 2);
    });

    it ("should handle removing values", () => {
      ds.put("hello", 5);
      ds.put("hyper", 6);
      assert.equal(ds.size(), 2);

      ds.remove("hello");
      assert.equal(ds.size(), 1);

      ds.remove("hyper");
      assert.equal(ds.size(), 0);
    });
  });
});
