'use strict';

const node = {
  data: undefined,
  next: undefined,
  prev: undefined
};

let node_count = 0;
let head, tail;

module.exports = {
  // o(n)
  add: function(i, v) {
    if (i > node_count || i < 0) {
      return false;
    }

    node_count++;

    let j = 0;
    let n = head;
    let p;

    while (j !== i) {
      j++;
      p = n;
      n = n.next;
    }

    const d = {};
    d.data = v;
    d.next = n;

    if (p) {
      p.next = d;
      d.prev = p;
    } else {
      head = d;
    }

    if (n) {
      n.prev = d;
      d.next = n;
    } else {
      tail = d;
    }
    
    return true;
  },

  // o(1)
  addFirst: function (v) {
    node_count++;

    const h = head;

    const n = {};
    n.data = v;
    n.next = h;
    n.prev = undefined;

    head = n;
    
    if (h) {
      h.prev = n;
    }
    if (!tail) {
      tail = n;
    }
  },

  // o(1)
  addLast: function(v) {
    node_count++;

    const n = {};
    n.data = v;
    n.next = undefined;
    n.prev = undefined;

    if (!head || !tail) {
      head = n;
      tail = n;
      return;
    }

    const t = tail;
    t.next = n;
    n.prev = t;

    tail = n;
  },

  // o(n)
  get: function(i) {
    if (i >= this.size() || i < 0 || this.size() === 0) {
      return;
    }
    if (i === 0) {
      return this.getFirst();
    }
    if (i === this.size() - 1) {
      return this.getLast();
    }

    node_count--;

    let n = head.next;
    let p = head;

    for (let j=2; j<=i; j++) {
      p = n;
      n = n.next;
    }

    p.next = n.next;
    n.next.prev = p;

    return n.data;
  },

  // o(1)
  getFirst: function() {
    if (!head) {
      return;
    }

    node_count--;

    const h = head;

    if (h.next) {
      head = h.next;
      head.prev = undefined;
    } else {
      head = undefined;
      tail = undefined;
    }

    return h.data;
  },

  // o(1)
  getLast: function() {
    if (!tail) {
      return;
    }
    
    node_count--;

    const t = tail;
    
    if (t.prev) {
      tail = t.prev;
      tail.next = undefined;
    } else {
      head = undefined;
      tail = undefined;
    }  

    return t.data;
  },

  // o(n)
  indexOf: function(v) {
    let i = 0;
    let n = head;

    while (n) {
      if (n.data === v) {
        return i;
      }

      i++;
      n = n.next;
    }

    return undefined;
  },

  // o(n)
  lastIndexOf: function(v) {
    let i = node_count - 1;
    let n = tail;

    while (n) {
      if (n.data === v) {
        return i;
      }

      i--;
      n = n.prev;
    }

    return undefined;
  },

  // o(n)
  contains: function(v) {
    const i = this.indexOf(v);
    return typeof i !== "undefined";
  },

  // o(n)
  count: function(v) {
    let c = 0;
    let n = head;

    while (n) {
      if (n.data === v) {
        c++;
      }

      n = n.next;
    }

    return c;
  },

  // o(1)
  size: function() {
    return node_count;
  },

  // o(1)
  reset: function() {
    head = undefined;
    tail = undefined;
    node_count = 0;
  },

  // o(n)
  toArray: function() {
    let n = head;
    const a = [];

    while (n) {
      a.push(n.data);
      n = n.next;
    }

    return a;
  }
};
