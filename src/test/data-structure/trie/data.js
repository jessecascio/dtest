/**
 * data test, run against random data sets
 */

const { assert, expect } = require("chai");
const util = require('./../../util.js');

const ds = require(util.input.s); // user data structure
const bn = require('./../../../data-structure/trie/source.js'); // benchmark

describe("Trie - Data Tests", function() {
  this.timeout(60000);

  it ("trie should handle random inputs", function() {
    const N = 1000;

    for (let i=0; i<50; i++) {
      let strs = [];
      ds.reset();
      bn.reset();
      
      for (let j=0; j<N; j++) {
        const c = Math.floor(Math.random() * 15);
        const s = Math.random().toString(36).replace(/[0-9.]/gi, '').substring(c);

        if (!s.length) {
          continue;
        }

        strs.push(s);

        ds.put(s, c);
        bn.put(s, c);
      }

      assert.equal(ds.size(), bn.size());
      assert.equal(ds.isEmpty(), bn.isEmpty());

      for (let j=0; j<strs.length; j++) {
        const c = Math.floor(Math.random() * 6);
        const s = Math.random().toString(36).replace(/[0-9.]/gi, '');

        switch (c) {
          case 0:
            assert.equal(ds.contains(strs[j]), bn.contains(strs[j]));
            break;
          case 1:
            assert.equal(ds.contains(s), bn.contains(s));
            break;
          case 2:
            const pre = s.substring(15);

            if (pre.length) {
              const p1 = ds.keysWithPrefix(pre);
              const p2 = bn.keysWithPrefix(pre);
              assert.equal(p1.length, p2.length);
            }
            
            break;
          case 3:
            ds.remove(strs[j]);
            bn.remove(strs[j]);
            break;
          case 4:
            assert.equal(ds.get(strs[j]), bn.get(strs[j]));
            break;
          case 5:
            ds.put(s, c);
            bn.put(s, c);
            break;
        }

        assert.equal(ds.size(), bn.size());
        assert.equal(ds.isEmpty(), bn.isEmpty());
      }
      
    }
  });
});