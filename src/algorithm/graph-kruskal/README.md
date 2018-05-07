## Overview

A spanning tree of a graph is a connected subgraph with no cycles that connects all vertices.  A minimum spanning tree of a weighted graph, is a spanning tree whose weight is no larger than the weight of any other spanning tree.  

Kruskal’s algorithm is a greedy algorithm for determining the minimum spanning true of an undirected graph.  Opposed to adding vertice’s too the MST, like Prim’s algorithm does, Kruskal’s algorithm analysis all of the available edges and edges the next lowest edge to the MST.    

## Implementation

The steps to implement are:

1. Place all of the edges by a priority queue sorted by minimum weight.
2. If next lowest edge does not form a cycle, add it to the MST

## Considerations

By using a disjointed set we can check if a given edge forms a cycle.  Simply map the vertices to ints, as the disjointed sets works off of an int array.

#### Additional Resources

* https://brilliant.org/wiki/spanning-trees/
* https://www.hackerearth.com/practice/algorithms/graphs/minimum-spanning-tree/tutorial/
* https://www.geeksforgeeks.org/greedy-algorithms-set-2-kruskals-minimum-spanning-tree-mst/
* https://www.hackerearth.com/blog/algorithms/kruskals-minimum-spanning-tree-algorithm-example/