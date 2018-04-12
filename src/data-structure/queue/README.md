## Overview

Queues are data structures for processing data following the FIFO (first-in-first-out) policy.

## Implementation

A simple implementation is to use either a fixed sized array or a dynamic resizing array; however, these options are not very efficient or flexible.  A better implementation of a queue is to use a doubly linked list.  The doubly linked list is better than a singly linked list as the previous links allow from pulling from the back of the list in constant time.  The linked list will provide both constant enqueue and dequeue functions as well as dynamic memory allocation. 

## Use Cases

Queues process data following the FIFO (first-in-first-out) policy.  It is difficult to find good queue specific questions to answer.  A better approach is to understand the optimal implementation of a queue structure.

#### Additional Resources

* https://medium.com/basecs/to-queue-or-not-to-queue-2653bcde5b04
* https://brilliant.org/wiki/queues-basic/
* https://leetcode.com/tag/queue/
* https://www.hackerrank.com/domains/data-structures/queues
* https://www.interviewbit.com/courses/programming/topics/stacks-and-queues/