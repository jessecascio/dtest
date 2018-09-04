'use strict';

module.exports = {
  // o(logn)
  search: function(v, a) {
    if (a.length === 0) {
      return -1;
    }

    let l=0, r=a.length-1;
    
    while (l <= r) {
      const m = Math.floor((l+r)/2);

      if (a[m] === v) {
        return m;
      }
      
      if (a[m] > v) {
        r = m-1;
      } else {
        l = m+1;
      }
    }

    return -1;
  }
};