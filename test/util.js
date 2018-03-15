
const path = `${__dirname}/../lib/out`;
const fs = require('fs');
const o = {};

for (let i=2; i<process.argv.length; i += 2) {
  const a = process.argv[i].replace('-', '');
  const b = process.argv[i + 1];

  if (a === 's' && b) {
    o[a] = `${__dirname}/../${b}`;
  }
  if (a === 't' && b) {
    o[a] = `${b}`;
  }
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
    write: function(name, data) {
      fs.writeFileSync(`${path}/${name}.out`, JSON.stringify(data), 'utf-8');
      return `./lib/out/${name}.out`;
    }
  }
};
