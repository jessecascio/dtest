## Overview

Linked lists are one of the most common data structures in computer science.  Doubly linked lists provide constant operations for both adding to and retrieving to the list.  Unlike arrays however, both access and deletion require linear time.  One of the benefits of using a linked list over an array is the fact that they do not require contiguous memory space, meaning that they can dynamically grow and are not wasting space due to over allocation.

The doubly linked list nodes link to both the next node and the previous node opposed to just the next node (singly linked list).

## Considerations

***PROs***
* Nodes can be added and removed from either the front or the back of the list.
* A doubly linked list can be traversed either from the front or from the back.

***CONs***
* Extra is space needed for the additional pointer.