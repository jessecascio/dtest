# dtest

NodeJS Data Structure and Algorithm Testing Framework

### Running

Copy the template file of data structure to `lib/` and add functionality:

`cp src/data-structure/linked-list-single/template.js lib/linked-list.js`

Pass in user defined data structure (-s) and test template path (-t):

`npm run dtest -- -s lib/linked-list.js -t src/test/data-structure/linked-list-single`