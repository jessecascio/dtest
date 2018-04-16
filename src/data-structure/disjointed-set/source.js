'use strict';

let data;
let size; // number of sets

module.exports = {
  // o(n)
  init: function(i) {
    size = i;
    data = [...Array(size).keys()];
  },

  // o(n)
  union: function(p, q) {
    let rootP = this._root(p);
    let rootQ = this._root(q);

    if (rootP === rootQ) {
      return;
    }

    // pick arbitrary root
    data[rootP] = rootQ;
    size--;
  },

  // o(n)
  _root: function(x) {
    // get root for a value
    while (x !== data[x]) {
      x = data[x];
    }

    return x;
  },

  // o(n)
  connected: function (p, q) {
    return this._root(p) === this._root(q);
  },

  // o(1)
  size: function() {
    return size;
  },

  // o(1)
  toArray() {
    return data;
  }
};
