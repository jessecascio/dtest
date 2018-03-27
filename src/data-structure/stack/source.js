'use strict';

const list = require(`${process.cwd()}/src/data-structure/linked-list/source`);

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
  size: function() {
    return list.size();
  },

  // o(n)
  toArray: function() {
    // stack in reverse order for constant operations
    return Array.reverse(list.toArray());
  }
};
