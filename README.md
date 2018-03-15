# dstest

NodeJS data structure and algorithm testing framework.

### Running

Copy the template file of data structure to `lib/` and add functionality:

`cp src/data-structure/linked-list-singly/template.js lib/linked-list.js`

Pass in user defined data structure (-s) and test template path (-t):

`npm run dstest -- -s lib/linked-list.js -t test/data-structure/linked-list-singly`