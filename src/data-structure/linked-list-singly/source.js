'use strict';

const node = {
  data: undefined,
  next: undefined
};

let node_count = 0;
let head;

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
    } else {
      head = d;
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

    head = n;
  },

  // o(n)
  addLast: function(v) {
    node_count++;

    const n = {};
    n.data = v;
    n.next = undefined;

    if (!head) {
      head = n;
      return;
    }

    let l = head;
    while (l.next) {
      l = l.next;
    }

    l.next = n;
  },

  // o(n)
  get: function(i) {
    if (i >= this.size() || i < 0 || !head) {
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

    return n.data;
  },

  // o(1)
  getFirst: function() {
    if (!head) {
      return;
    }

    const n = head;
    head = n.next;

    node_count--;

    return n.data;
  },

  // o(n)
  getLast: function() {
    if (!head) {
      return;
    }
    if (!head.next) {
      return this.getFirst();
    }

    node_count--;

    let p = head;
    let n = head.next;

    while (n.next) {
      p = n;
      n = n.next;
    }

    p.next = undefined;

    return n.data;
  },

  // o(n)
  peek: function(i) {
    if (i >= this.size() || i < 0 || !head) {
      return;
    }
    if (i === 0) {
      return this.peekFirst();
    }
    if (i === this.size() - 1) {
      return this.peekLast();
    }

    let n = head.next;

    for (let j=2; j<=i; j++) {
      n = n.next;
    }

    return n.data;
  },

  // o(1)
  peekFirst: function() {
    if (!head) {
      return;
    }

    return head.data;
  },

  // o(n)
  peekLast: function() {
    if (!head) {
      return;
    }
    if (!head.next) {
      return this.peekFirst();
    }

    let n = head.next;

    while (n.next) {
      n = n.next;
    }

    return n.data;
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
    let i = 0;
    let p = undefined;
    let n = head;

    while (n) {
      if (n.data === v) {
        p = i;
      }

      i++;
      n = n.next;
    }

    return p;
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
  clear: function() {
    head = undefined;
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
