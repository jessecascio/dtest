## Overview

Disjointed sets are a good data structure for solving dynamic connectivity problems.  That is, given a sequence of pairs of integers determine if two integers are connected.  Disjointed sets are also commonly used to determine if two nodes on an undirected graph are connected.  

Disjointed sets offer a way to keep track of connectivity in between elements in a particular subset or connectivity of subsets with each other.

## Implementation

A disjointed set can be simply, and inefficiently, constructed using linked lists.  Each item is initially put in it’s own linked list.  When union() is called, the tail of p points to q’s list.

A better implementation uses a set (forest) of trees.  To start, each element is its own tree.  When union() is called, first the root is found for each element.  This can be done by iterating up the tree until you find a node pointing to itself.  Using an array, this occurs when i == data[i].  Next, after the roots are found, if the roots are different (do nothing if they are equal), then point one of the roots as the parent of the other and decrement count.  This will create connections between the trees.  To determine if two points are connected simply check if both of the points have the same root (parent).

## Considerations

### Improvements

1. Path Compression
  * With path compression, during the find operation we point each node we visit during the upward tree iteration directly to the parent.  This cuts down on future iterations.
2. Rank Check
  * By attaching a rank to each node, which identifies number of children nodes, we can always attach the smaller tree to the larger tree.  This lowers the number of iterations that needs to be done on the find command. 

## Use Cases

* https://brilliant.org/wiki/disjoint-set-data-structure/
* https://www.topcoder.com/community/data-science/data-science-tutorials/disjoint-set-data-structures/
* https://leetcode.com/tag/union-find/
* https://www.hackerrank.com/domains/data-structures/disjoint-set