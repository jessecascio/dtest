## Overview

A directed graph has one way edges.  Vertices define edges of ordered pairs to specify one-way adjacency.

## Considerations
* The depth and breadth searches are identical between an undirected and a directed graph.
* For graphs that are acylic (have no cycles), a preorder sort will order vertices as they are reached in a depth first search and a postorder sort will order vertices as they are completed in a depth first search.
* Directed graphs can be used to solve precedence-constrained scheduling problems i.e. given a set of jobs to complete, how can they be scheduled so that they are all completed while adhering to the given constraints.  This can be modeled in an acylic graph with a reverse post ordering sort which will determine the order in which the tasks need to be completed.  This is known as a topological sort.

## Interview Prep

* https://leetcode.com/tag/graph/
* https://www.interviewbit.com/courses/programming/topics/graphs/