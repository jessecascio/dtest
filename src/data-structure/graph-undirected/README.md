## Overview

An undirected graph is a model where edges are nothing more than connections between vertices.  Vertices are **adjacent** if there is an edge between the two vertices.  The **degree** of a vertex is the number of edges connected to it. A **path** is a sequence of vertices connected by edges.  A **cycle** is a path that includes an edge which points to a first and last indice.  The **path length** is the number of edges.  Two vertices are **connected** if they are on the same path.  A graph is connected if all vertices are on the same path.  An **acyclic** graph has no cycles, which makes it a **tree**.  A **spanning tree** is a subgraph that contains all of the graph’s vertices and is a single tree.

## Implementation

There are a couple different data structure options for implementing the graph.  The vertices can be stored in either an array (int based) or a hashmap (string based).  Each vertice points to a list of vertices that it's connected to.  This list can be an **adjacency list** or an **adjacency set**. 

***Adjacency List***
* Provides constant vertice and edge insertion
* Does not prevent parallel edges
* Requires O(e) for edge deletion

***Adjacency Set***
* Prevents parallel edges
* Requires O(logE) for edge insertion
* Provides O(logE) for edge deletion

## Considerations
* Depth first searches should be processed using a LIFO stack while a breadth first search should be processed using a FIFO queue.
* When implementing the searches, depth and breadth, it is easier to create a parent-link representation of a tree rooted in one of the vertices.  While adding some additional space, it will make path retrieval less complex as you’re just checking edge taken to each vertice.
* While a disjointed set will tell if two nodes are connected in an undirected graph, it will not be able to determine what that actual path is.
* To determine the number of components (unique sets) either a depth first search on an undirected graph or a disjointed set can be used.  Since the graph requires preprocessing (mapping edges up front) it is typically preferred to use a disjointed set if no other graph algorithms are required.  With a graph one can simply do depth first searches and map which values have been seen while iterating the available vertices.
* Acyclic graphs contain self loops.  This can be determined with depth first searches on the same key values.

## Interview Prep

* https://leetcode.com/tag/graph/
* https://www.interviewbit.com/courses/programming/topics/graphs/