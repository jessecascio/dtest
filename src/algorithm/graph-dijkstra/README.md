## Overview

Dijkstra's algorithm can be used to determine the shortest path from one node in a graph to every other node within the same graph data structure, provided that the nodes are reachable from the starting node.  The algorithm can be run until every vertice has been visited, thereafter providing constant time lookups for shortest paths.  For a directed acyclic graph, simply doing a topological sort and adding up the weights is a more efficient approach than Dijkstra's algorithm.

***NOTE:** Dijkstra's algorithm is not designed to work with negative weighting.*  See the Bellman-Ford algorithm for finding shortest path in a graph with negative weighting.

## Implementation

When requesting distance from one vertice, source, to another vertice, target, Dijkstra's algorithm can either run until the target is found or until all of the vertice distances are found from source while preserving the path map for future requests.  The map should be able to determine the weight to a target vertice from a source vertice.

The idea behind Dijkstra's algorithm is to greedily choose the next lowest path using a priority queue.  The steps are:

1. Pull a vertice off of the priority queue based on the lowest current weight
2. If vertice has already been visited, check if new weight is smaller
3. Iterate all of the vertices edges, updating the edge's pathTo (from source) to be the current vertice weight plus the current vertices parent weight.
4. If edge has not been visited, place into the priority queue along with its current weight

## Considerations

* If we truly only need the distance between two vertices, without the need to create a full map, the algorithm can be stopped after the target edge has been popped off of the queue.
* A lazy approach to queue management is to just put the edges in that have not been visited, thus leading to duplicate edges with different weights.  An eager approach would be to update the values that already exist in the queue to just use the smaller of the weights.

#### Additional Resources

* https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e
