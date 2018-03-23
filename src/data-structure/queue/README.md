## Overview

Queues are data structures for representing FIFO (first-in-first-out).

## Implementation

A simple implementation is to use either a fixed sized array or a dynamic resizing array; however, these options are not very efficient or flexible.  A better implementation of a queue is to use a doubly linked list.  The doubly linked list is better as the previous links allow from pulling from the end of the list in constant time.  The linked list will provide both constant enqueue and dequeue functions as well as dynamic memory allocation.  

## Interview Prep

* https://leetcode.com/tag/queue/
* https://www.hackerrank.com/domains/data-structures/queues
* https://www.interviewbit.com/courses/programming/topics/stacks-and-queues/