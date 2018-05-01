## Overview

**NOTE:** *There are typically several different correct orderings for topo sort, so the random data tests for this algorithm may not always pass even for a correct implementation.*

Topological sorting for a directed acyclic graph is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering.  In general, topological sorting will not provide a solution for directed graphs with cycles due to the occurence of uncompletable dependencies which leads to deadlocks in precedence ordering.

Topological sorting can be used with applications such as dependency orchestration, job scheduling with precedence constraints, etc., where specific tasks need to be completed before another task can start.

## Implementation

Implementing a topological sort on an acylic directed graph is simply reversing the post order.  Post order is created by pushing a vertice onto a stack after all of its edges have been explored.  Alternatively, instead of revering the post order stack, you could store the vertices in a queue and simply return an array representation of the queue.

#### Additional Resources

* https://www.geeksforgeeks.org/topological-sorting
* https://en.wikipedia.org/wiki/Topological_sorting
* https://leetcode.com/tag/topological-sort