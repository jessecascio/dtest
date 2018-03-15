'use strict';

let trie = {};
let size = 0;

module.exports = {
  // o(m)
  put: function(k, v) {
    size++;

    let t = trie;
    let i = 0;

    for (let c of k) {
      i++;

      if (!t[c]) {
        t[c] = {};
      }
      if (i === k.length) {
        t[c].val = v;
      } else {
        t = t[c];
      }
    }
  },

  // o(m)
  get: function(k) {
    const t = this._get(trie, k);
    return t ? t.val : undefined;
  },

  // o(m)
  _get: function(t, s) {
    for (let c of s) {
      if (!t[c]) {
        return;
      }

      t = t[c];
    }

    return t;
  },

  // o(m)
  remove: function(k) {
    if (!k || !k.length) {
      return;
    }

    this._remove(trie, k, 0);
  },

  // o(m)
  _remove: function(t, k, i) {
    if (!t) {
      return false;
    }
    
    let c = k[i];
    i++;

    if (!t[c]) {
      return false;
    }

    if (i === k.length) {
      delete t[c].val;
      return Object.keys(t[c]).length === 0;
    } else {
      if (this._remove(t[c], k, i) === true) {
        delete t[c][k[i]];
        size--;
      }
    }
  },

  // o(m)
  contains: function(k) {
    return typeof this.get(k) !== "undefined";
  },

  // o(n)
  keys: function() {
    return this._keys(trie, '', []);
  },

  _keys: function(t, k, d) {
    if (!t) {
      return d;
    }

    if (typeof t.val !== "undefined") {
      d.push(k);
    }

    for (let c of Object.keys(t)) {
      if (c !== "val") {
        this._keys(t[c], k+c, d);
      }
    }

    return d;
  },

  keysWithPrefix: function(s) {;
    return this._keysWithPrefix(this._get(trie, s), s, []);
  },

  _keysWithPrefix: function(t, s, k) {
    if (!t) {
      return k;
    }

    for (let c of Object.keys(t)) {
      if (c !== "val") {
        this._keysWithPrefix(t[c], s+c, k);
      }
    }

    if (typeof t.val !== "undefined") {
      k.push(s);
    }

    return k;
  },

  // o(1)
  size: function() {
    return size;
  },

  // o(1)
  isEmpty: function() {
    return size === 0;
  },

  // o(1)
  clear: function() {
    trie = {};
    size = 0;
  },

  // o(1)
  toJSON: function() {
    return trie;
  }
};