## Overview

Stacks are data structures for processing data following the LIFO (last-in-first-out) policy.

## Implementation

A simple implementation is to use either a fixed sized array or a dynamic resizing array; however, these options are not very efficient or flexible.  A better implementation of a stack is to use a linked list (singly is sufficient).  The linked list will provide both constant push (add to front) and pop (remove from front) functions as well as dynamic memory allocation.

## Use Cases

Stacks process data following the LIFO (last-in-first-out) policy.  In languages that don’t have native stacks (like NodeJS) an array can be used as a stack.  

* It can be difficult to summarize when to use a stack, outside of the obvious times that you need to process data in LIFO order.

1. https://leetcode.com/problems/valid-parentheses/description/
3. https://leetcode.com/problems/baseball-game/description/

* Some of the stack function implementations with a twist can be helpful in understanding how the data structure works.

1. https://leetcode.com/problems/min-stack/description/
2. https://leetcode.com/problems/implement-queue-using-stacks/description/

* Some questions that involve stack are ones that need to be processed linearly i.e. an array of data, but previous data needs to be “unwound” in LIFO order.  These are some of the best style of questions to read and to understand when looking for stack challenges to solve.

1. https://leetcode.com/problems/next-greater-element-i/description/
2. https://leetcode.com/problems/next-greater-element-ii/description/
3. https://leetcode.com/problems/daily-temperatures/description/
4. https://leetcode.com/problems/remove-k-digits/description/

* Often times it is not apparent up front that a stack is needed, but using one aides in the flow of processing data

1. https://leetcode.com/problems/decode-string/description/

#### Additional Resources

* https://medium.com/basecs/stacks-and-overflows-dbcf7854dc67
* https://brilliant.org/wiki/stacks/
* https://www.interviewbit.com/courses/programming/topics/stacks-and-queues/
* https://leetcode.com/tag/stack/
* https://www.hackerrank.com/domains/data-structures/stacks