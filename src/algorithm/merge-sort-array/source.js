'use strict';

module.exports = {
  // o(nlogn)
  sort: function(a) {
    return this._sort(a);
  },

  _sort: function(d) {
    if (d.length <= 1) {
      return d;
    }

    const m = Math.floor(d.length/2);

    const s1 = this._sort(d.slice(0,m));
    const s2 = this._sort(d.slice(m));
    
    return this._merge(s1, s2);
  },

  _merge: function(s1, s2) {
    if (s1.length === 0 && s2.length === 0) {
      return [];
    } else if (s1.length === 0) {
      return s2;
    } else if (s2.length === 0) {
      return s1;
    }

    const m = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < s1.length || i2 < s2.length) {
      if (i1 >= s1.length) {
        m.push(s2[i2]);
        i2++;
      } else if (i2 >= s2.length) {
        m.push(s1[i1]);
        i1++;
      } else if (s1[i1] < s2[i2]) {
        m.push(s1[i1]);
        i1++;
      } else if (s1[i1] > s2[i2]) {
        m.push(s2[i2]);
        i2++;
      } else {
        m.push(s1[i1]);
        m.push(s2[i2]);
        i1++;
        i2++;
      }
    }

    return m;
  }
};