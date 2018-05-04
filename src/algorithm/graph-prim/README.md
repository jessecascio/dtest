## Overview

A spanning tree of a graph is a connected subgraph with no cycles that connects all vertices.  A minimum spanning tree of a weighted graph, is a spanning tree whose weight is no larger than the weight of any other spanning tree.  

Prim's algorithm is a greedy algorithm for determining the minimum spanning true of an undirected graph.  From a given vertice, determine all of the smallest edges so that we are always processing the next smallest edge as possible.    

## Implementation

The steps to implement are:

1. From a given vertice, place all edges into a priority queue along with their weights
2. Pull from the queue until an edge that hasn't been visited is found
3. Add the edge to the minimum spanning tree and place all of it's edges into the priority queue

## Considerations

A lazy approach just puts all of the edges that haven't been visited yet into the queue leading to potentially duplicated edges as some edges will be accessible from multiple vertices.  Those edges are then filtered out as they are taken out of the queue.

An eager, more efficient, approach would be to invalidate all vertices in the priority queue that have already been visited. 

#### Additional Resources

* https://brilliant.org/wiki/spanning-trees/
* https://www.geeksforgeeks.org/greedy-algorithms-set-5-prims-minimum-spanning-tree-mst-2/