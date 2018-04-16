## Overview

Tries (prefix trees) are data structures that use string keys to store values.  The characters of the string are used to guide the path of the search.  Tries provide theoretical optimal search hits as key lookups are based on key length not number of keys.  Another benefit of the trie is that search misses are not dependent on key length.  While the performance of the trie data structure is efficient, they do require a lot of space, especially as they key sizes grow.

***PROs***
* Looking up data in a trie is faster in the worst case, O(m) time (where m is the length of a search string), compared to an imperfect hash table. An imperfect hash table can have key collisions.  The worst-case lookup speed in an imperfect hash table is O(N) time, but typically is O(1), with O(m) time spent evaluating the hash.
* There are no collisions of different keys in a trie.
* There is no need to provide a hash function or to change hash functions as more keys are added to a trie.
* A trie can provide an alphabetical ordering or pattern matching of the entries’ keys (partial keys).

***CONs***
* Tries can be slower in some cases than hash tables for looking up data, especially if the data is directly accessed on a hard disk drive or some other secondary storage device where the random-access time is high compared to main memory.
* Some tries can require more space than a hash table, as memory may be allocated for each character in the search string, rather than a single chunk of memory for the whole entry, as in most hash tables.

## Implementation

Similar to linked lists, tries use links to nodes where each node is linked to by one other node (parent) and has R links where R=alphabet size.  Nodes that represent the end of a key have a value associated with them.  This allows for the key/value store as well as identification of the end of a key.

When deleting keys it’s important to delete orphaned nodes i.e. nodes that do not have any children.

## Improvements

1. Ternary Search Trie
* Long keys can have long tails and many one-way links i.e. just a single link, which leads to a large amount of space consumption.  The ternary search trie (TST) instead enforces just three links per node, with characters less than on the left, characters equal to in the middle, and characters greater than on the right.  While not as efficient as the typical trie, in situations where space is limited it is a viable alternative.

## Use Cases

Tries are data structures for searching for values based on string keys, similar to a hashmap with the exception of the ability to do partial and wildcard key lookups efficiently.  Use cases in which tries can be used for include:

* Tries are common data structure for problems that have to do with partial string key matching i.e. find all partial keys, find all keys with a wildcard character

* Due to tree shape of a trie, problems that require treating keys like a dictionary or using substrings of the keys can easily be done by going down the tree to find both partial and full string keys

1. https://leetcode.com/problems/map-sum-pairs/description
2. https://leetcode.com/problems/implement-magic-dictionary/description
3. https://www.hackerrank.com/challenges/contacts/problem

#### Additional Resources

* https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014
* https://brilliant.org/wiki/tries/
* https://leetcode.com/tag/trie/
* https://www.hackerrank.com/domains/data-structures/trie