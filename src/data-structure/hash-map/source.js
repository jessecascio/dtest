'use strict';

let map = [];

module.exports = {
  // o(n)
  put: function(k, v) {
    const h = this._hash(k);

    if (!map[h]) {
      map[h] = this._list()
    }

    const i = map[h].indexOf(k);
    if (typeof i !== "undefined") {
      map[h].get(i);
    }

    map[h].addFirst({ k, v });
  },

  // o(n)
  get: function(k) {
    const h = this._hash(k);

    if (!map[h]) {
      return undefined;
    }

    const i = map[h].indexOf(k);
    let node = {};

    if (typeof i !== "undefined") {
      node = map[h].get(i);
      map[h].addFirst(node);
    }

    return node.v;
  },

  // o(n)
  keys: function() {
    let keys = [];

    for (const list of map) {
      if (list) {
        keys = keys.concat(list.toArray().map(v => {
          return v.k;
        }));
      }
    }

    return keys;
  },
  
  // o(m)
  _hash: function(s) {
    let hash = 0;

    for (const i in s) {
      hash = (31 * hash + s.charCodeAt(i)) % 100;
    }

    return hash;
  },

  // o(1)
  _list: function() {
    const path = `${process.cwd()}/src/data-structure/linked-list/source`;
    delete require.cache[require.resolve(path)]
    const list = require(path);
    
    list._equal = (i, j) => {
      return i.k === j;
    };

    return list;
  },

  // o(1)
  reset: function() {
    map = []
  }
};