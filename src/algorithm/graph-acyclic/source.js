'use strict';

const q = require(`${process.cwd()}/src/data-structure/queue/source`);

module.exports = {
    // o(n)
    acyclic: function(g) {
        const vs = Object.keys(g).map(Number)
        if (!vs.length)
            return true

        const done = new Set()
    
        for (const v of vs) {
            if (done.has(v))
                continue

            if (this._cycle(g, v, done))
                return false
        }

    return true
  },

    _cycle: function(g, v, done, current=(new Set())) {
        if (done.has(v))
            return false
        
        if (current.has(v))
            return true
        current.add(v)

        for (const e of g[v]) {
            if (this._cycle(g, e, done, current))
                return true
        }

        current.delete(v)
        done.add(v)
    }
};