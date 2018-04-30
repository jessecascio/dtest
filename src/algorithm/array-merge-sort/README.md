## Overview

The merge sort is a divide-and-conquer algorithm, taking an array and breaking the array into smaller sub arrays. The merge sort recursively divides an array in half until each element is alone, then merges each element back together ensuring each newly created element is correctly sorted.  The benefit of the merge sort is that it has much lower time complexity than the insertion and selection sorts, but has the cost of additional space requirements due to the merging of the sub arrays. If space is limited, another sorting algorithm may be better. 

## Implementation

1. Recursively break the array into halves until each element is alone
2. Merge the elements so that the newly created element

## Considerations

There are some areas for performance improvements due to the recursive nature of the algorithm and the implied smaller size of the subarrays.  For example, using a simple sort algorithm like the insertion sort on the subarrays can provide performance gains.  Also, when doing the merge step, it's important to do the sorting inline, by keeping the data in the array and moving the elements around opposed to passing copies of the data around for merging.  This can be done with pointers for start, mid, and end.

#### Additional Resources
* https://medium.com/basecs/making-sense-of-merge-sort-part-1-49649a143478
* https://medium.com/basecs/making-sense-of-merge-sort-part-2-be8706453209
* https://brilliant.org/wiki/merge/
* https://leetcode.com/tag/sort/
* https://www.hackerrank.com/domains/algorithms/arrays-and-sorting