## Overview

Linked lists are one of the most common data structures in computer science.  Singly linked lists provide constant operations for both adding to and retrieving from the front of the list.  Unlike arrays however, both access and deletion require linear time.  One of the benefits of using a linked list over an array is the fact that they do not require contiguous memory space, meaning that they can dynamically grow and are not wasting space due to over allocation.

The singly linked list only links to next node opposed to both the next and previous nodes (doubly linked list).

## Considerations

***PROs***
* The size of the arrays is fixed; therefore, we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage, and in practical uses, upper limit is rarely reached.
* Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to shifted.

***CONs***
* Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists i.e. slower search.
* Extra memory space for a pointer is required with each element of the list.
* Arrays have better cache locality that can make a pretty big difference in performance.