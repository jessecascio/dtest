## Overview

Stacks are data structures for representing LIFO (last-in-first-out).

## Implementation

A simple implementation is to use either a fixed sized array or a dynamic resizing array; however, these options are not very efficient or flexible.  A better implementation of a stack is to use a linked list (singly is sufficient).  The linked list will provide both constant push and pop functions as well as dynamic memory allocation.  