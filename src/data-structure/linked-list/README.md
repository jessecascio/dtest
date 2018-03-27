## Overview

Linked lists are one of the most common data structures in computer science.  Linked lists provide constant operations for both adding to and retrieving.  Unlike arrays however, both access and deletion require linear time.  One of the benefits of using a linked list over an array is the fact that they do not require contiguous memory space, meaning that they can dynamically grow and are not wasting space due to over allocation.

In a singly linked list the nodes only link to the next node, opposed to both the next and previous nodes, which only allows for constant adding to and removing from the front of the list.

In a doubly linked list nodes link to both the next node and the previous node, which allows for bidirectional iteration as well as constant additions/removals from the end of the list.

### Considerations

***PROs***
* The size of the arrays is fixed whereas linked lists can grow dynamically; therefore, with arrays we must know the upper limit on the number of elements in advance. 
* Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to be shifted.
* Deleting from an array is expensive since elements need to be shifted down after a deletion.

***CONs***
* Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists i.e. slower search.
* Extra memory space for a pointer is required with each element of the list.
* Arrays have better cache locality that can make a pretty big difference in performance.
* Extra is space needed for the additional pointer in a double linked list.

## Interview Prep

* https://leetcode.com/tag/linked-list/
* https://www.hackerrank.com/domains/data-structures/linked-lists
* https://www.interviewbit.com/courses/programming/topics/linked-lists