'use strict';

const list = require(`${process.cwd()}/src/data-structure/linked-list-singly/source`);

module.exports = {
  // o(1)
  push: function(v) {
    list.addFirst(v);
  },

  // o(1)
  pop: function() {
    return list.getFirst();
  },

  // o(1) 
  isEmpty: function() {
    return list.size() === 0;
  },

  // o(1)
  size: function() {
    return list.size();
  },

  // o(n)
  toArray: function() {
    // keeps stack in reverse order for constant operations
    return Array.reverse(list.toArray());
  },

  // o(1)
  clear: function() {
    list.clear();
  }
};
