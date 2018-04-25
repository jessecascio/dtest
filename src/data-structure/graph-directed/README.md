## Overview

A directed graph has one way edges.  Vertices define edges of ordered pairs to specify one-way adjacency.

## Considerations
* The depth and breadth searches are identical between an undirected and a directed graph.
* For graphs that are acylic (have no cycles), a preorder sort will order vertices as they are reached in a depth first search and a postorder sort will order vertices as they are completed in a depth first search.
* Reversing a directed graph can be useful to determine what edges point to a vertice.
* Breadth first search solves the problem of the determining the shortest path between two vertices
* Directed graphs can be used to solve precedence-constrained scheduling problems i.e. given a set of jobs to complete, how can they be scheduled so that they are all completed while adhering to the given constraints.  This can be modeled in an acylic graph with a reverse post ordering sort which will determine the order in which the tasks need to be completed.  This is known as a topological sort.
* In general, if a precedence-constrained scheduling problem has a directed cycle then there is no feasible solution.
* A directed graph is **strongly connected** if there exists both a path from w to v as well as a path from v to w.  A graph is strongly connected if all of the vertices are strongly connected to one another.
* Kosaraju’s algorithm can be used to determine if two vertices are strongly connected in constant time.
* The **transitive closure** of a directed graph (G) is another digraph with the same set of vertices, but with an edge from v to w in the transitive closure if and only if w is reachable from v in G.

## Use Cases

* https://leetcode.com/tag/graph/
* https://www.interviewbit.com/courses/programming/topics/graphs/