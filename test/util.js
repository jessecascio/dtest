const path = `${__dirname}/../lib`;
const fs = require('fs');
const o = {};

for (let i=2; i<process.argv.length; i += 2) {
  const a = process.argv[i].replace('-', '');
  const b = process.argv[i + 1];

  if (a === 's' && b) {
    o[a] = `${__dirname}/../${b}`;
    o.f = b;
  }
  if (a === 't' && b) {
    o[a] = `${b}`;
  }
}

let f; // grab file name
if (o.s) {
  f = o.s.split('/').pop();
  f = !f ? 'output.debug' : f.split('.').shift();
}

module.exports = {
  input: o,
  time: 0,
  timer: {
    start: function() {
      this.time = Date.now();
    },
    stop: function() {
      return Date.now() - this.time;
    }
  },
  output: {
    file: f,
    write: function(data) {
      fs.writeFileSync(`${path}/${this.file}.debug`, JSON.stringify(data), 'utf-8');
      return `./lib/${this.file}.debug`;
    }
  }
};
