## Overview

A directed graph is strongly connected if there is a path between all pairs of vertices. A strongly connected component of a directed graph is a component where every vertex is strongly connected to one another.  Determining strongly connected components in a directed graph can be beneficial for grouping vertices and determining relationships between the groups of vertices.  Also, by determining strongly connected components one can make a graph acylic by treating the grouped vertices as a single vertice in a graph.

By using Kosaraju’s algorithm we can determine how many (or actual paths) of all of the strongly connected components in a graph in O(e+v) time and O(v) space.

## Implementation

1. Create a post order stack
2. Reverse the graph
3. Pop vertices off of the stack and perform a depth first search.  Each popped element, that has not been previously visited, adds to the component count.

#### Additional Resources

* https://www.geeksforgeeks.org/strongly-connected-components
* https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm
