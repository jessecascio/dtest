'use strict';

let data = [];
let size = 0; // number of sets
let rnge = 0; // valid input range

module.exports = {
  // o(n)
  init: function(i) {
    size = i;
    rnge = size;
    data = [...Array(size).keys()];
  },

  // o(n)
  union: function(p, q) {
    if (!this._valid(p) || !this._valid(q)) {
      return;
    }

    // arbitrarily pick one as the parent (p)
    const pRoot = this._root(p);
    const qRoot = this._root(q);

    if (pRoot === qRoot) {
      return;
    }

    data[q] = p;
    size--;
  },

  // o(n)
  _root(x) {
    // get root for a value
    while (x !== data[x]) {
      x = data[x];
    }

    return x;
  },

  // o(1)
  _valid(x) {
    return x >= 0 && x < rnge;
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
