## Overview

Tries (prefix trees) are data structures that use string keys to store values.  The characters of the string are used to guide the path of the search.  Tries provide theoretical optimal search hits as key lookups are based on key length not number of keys.  Another benefit of the trie is that search misses are not dependent on key length.  While the performance of the trie data structure is efficient, they do require a lot of space, especially as they key sizes grow.

## Implementation

Similar to linked lists, tries use links to nodes where each node is linked to by one other node (parent) and has R links where R=alphabet size.  Nodes that represent the end of a key have a value associated with them.  This allows for the key/value store as well as signifies the end of a key.

When deleting keys it’s important to delete orphaned nodes i.e. nodes that do not have any children.

## Considerations

***PROs***
* Looking up data in a trie is faster in the worst case, O(m) time (where m is the length of a search string), compared to an imperfect hash table. An imperfect hash table can have key collisions.  The worst-case lookup speed in an imperfect hash table is O(N) time, but typically is O(1), with O(m) time spent evaluating the hash.
* There are no collisions of different keys in a trie.
* There is no need to provide a hash function or to change hash functions as more keys are added to a trie.
* A trie can provide an alphabetical ordering or pattern matching of the entries’ keys.

***CONs***
* Tries can be slower in some cases than hash tables for looking up data, especially if the data is directly accessed on a hard disk drive or some other secondary storage device where the random-access time is high compared to main memory.
* Some tries can require more space than a hash table, as memory may be allocated for each character in the search string, rather than a single chunk of memory for the whole entry, as in most hash tables.

## Improvements

1. Ternary Search Trie
* Considering long keys can have long tails and many one-way links i.e. just a single link, which leads to a large amount of space consumption.  The ternary search trie (TST) instead enforces just three links per node, with characters less than on the left, characters equal to in the middle, and characters greater than on the right.  While not as efficient as the typical trie, in situations where space is limited it is a viable alternative.