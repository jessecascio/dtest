## Overview

A heap is a tree data structure where each node is larger (max heap) or equal to the two children nodes, ensuring that the root of the tree is always the max value.  A linked implementation of the tree would require having three links: two to the children nodes and one to the parent; therefore, it is common to use a “complete” binary tree, where values are filled in left to right, forcing each level (except the last) to be filled and all nodes to be as far left as possible.  Using a complete tree allows for the use of a compact array to store the data instead of linking nodes.

Heaps allow for storing sorted data but not in full sorted order, rather tracking the next min/max value.  Heaps are typically used in priority queue implementations and are also a great data structure for finding x smallest/largest values.

## Implementation

One implementation uses an array or a linked list, kept either ordered or unordered. These implementations are useful for small priority queues, in situations where one of the two operations (insert or remove) are dominant, or in situations where some assumptions can be made about the order of the keys involved in the operations.

***Unordered Array/Linked List*** - This would require pushing to the data structure, then iterating the values exchanging the max/min in the last index, and pop()’ing off the value.  Would need to use dynamic allocating data structure so that the heap can continually grow. ***Insert O(1) - Remove O(N)***.

***Ordered Array/Linked List*** - Use an insertion sort to keep the data structure ordered on insert.  When a new value comes in find its place, then shift all other values to the right, thus could always remove in constant time. ***Insert O(N) - Remove O(1)***.

***Complete Binary Tree*** - A proper heap implementation uses a complete binary tree represented as a compact array.  Using the complete binary tree, we can achieve both insert() and remove() in O(logN).  The parent of the node in position k is in position [k/2] and, conversely, the two children of the node in position k are in positions 2k and 2k + 1. Instead of using explicit links to children and parent, we can travel up and down by doing simple arithmetic on array indices: to move up the tree from a[k] we set k to k/2; to move down the tree we set k to 2k or 2k+1.  This can lead to logarithmic insert and removal of min/max.

The heap operations first make a simple modification to the heap that could violate the heap condition.  Then traveling through the heap, the operation modifies the heap as required to ensure that the heap condition is satisfied everywhere. This process is called re-heapifying, or restoring heap order.

There are two cases. When the priority of some node is increased (or a new node is added at the bottom of a heap), we have to travel up the heap to restore the heap order. When the priority of some node is decreased (for example, if we replace the node at the root with a new node that has a smaller key), we have to travel down the heap to restore the heap order.

## Use Cases

Heaps offer a data structure that provides data in partial sorted order by keeping the min/max value accessible in log(N) time.

* Heaps are commonly used in problems for finding the kth largest values, as a full sort is not required since k elements can simply be taken off of the heap

* Heaps can be used to merge lists as an alternative to merging into a single array and sorting

1. https://leetcode.com/problems/top-k-frequent-elements/description

#### Additional Resources

* https://leetcode.com/tag/heap/
* https://www.hackerrank.com/domains/data-structures/heap
* https://www.interviewbit.com/courses/programming/topics/heaps-and-maps/