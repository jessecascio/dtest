## Overview

Linked lists are one of the most common data structures in computer science.  Linked lists provide constant operations for both adding to and retrieving.  Unlike arrays however, both access and deletion require linear time.  One of the benefits of using a linked list over an array is the fact that they do not require contiguous memory space, meaning that they can dynamically grow and are not wasting space due to over allocation.

In a singly linked list the nodes only link to the next node, opposed to both the next and previous nodes, which only allows for constant adding to and removing from the front of the list.

In a doubly linked list nodes link to both the next node and the previous node, which allows for bidirectional iteration as well as constant additions/removals from the end of the list.

### Considerations

***PROs***
* The size of the arrays is fixed where as linked lists can grow dynamically; therefore, with arrays we must know the upper limit on the number of elements in advance.
* Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to be shifted.
* Deleting from an array is expensive since elements need to be shifted down after a deletion.

***CONs***
* Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists i.e. slower search.
* Extra memory space for a pointer is required with each element of the list.
* Arrays have better cache locality that can make a pretty big difference in performance.
* Extra is space needed for the pointers in a linked list.

When sorting a linked list it is preferred to use a merge sort over a quick sort for the following reasons:

1. Since linked lists allow for constant time insertion extra space is not required to use a merge sort which is a major downfall for using a merge sort with arrays.
2. Linked lists do not allow for random access since the memory is not continuous, which the quicksort relies heavily on.

## Use Cases

Linked lists are a fundamental data structure and can typically be used in place of arrays in certain use cases.  When looking for coding challenges involving linked lists the problems are typically focused on linked list manipulation since the data structure is so fundamental.  Some of the most common linked list problems include:

* https://leetcode.com/problems/intersection-of-two-linked-lists/description/
* https://leetcode.com/problems/linked-list-cycle/description/
* https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
* https://leetcode.com/problems/merge-two-sorted-lists/description/
* https://leetcode.com/problems/reverse-linked-list/description/
* https://leetcode.com/problems/delete-node-in-a-linked-list/description/
* https://leetcode.com/problems/palindrome-linked-list/description/
* https://leetcode.com/problems/partition-list/description/
* https://leetcode.com/problems/insertion-sort-list/description/
* https://leetcode.com/problems/linked-list-cycle-ii/description/

You should take the time to solve these, along with any other easy or medium questions, and thoroughly know the approach for solving each.  They make for quick and "easy" interview questions.

#### Additional Resources

* https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d
* https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996
* https://brilliant.org/wiki/linked-lists/
* https://leetcode.com/tag/linked-list/
* https://www.hackerrank.com/domains/data-structures/linked-lists
* https://www.interviewbit.com/courses/programming/topics/linked-lists/