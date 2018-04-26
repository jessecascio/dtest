## Overview

The merge sort is a divide-and-conquer algorithm, taking the array and breaking it into smaller sub arrays. The merge sort recursively divides an array in half until each element is alone, then merges each element back together ensuring each element is correctly sorted. The benefit of the merge sort is that it has much lower time complexity than the insertion and selection sorts, but has the cost of additional space requirements due to the merging of the sub arrays. If space is limited, another sorting algorithm may be better. It’s important to do the sorting inline, by keeping the data in the array and moving the elements around opposed to passing copies of the data around for merging. There are some areas for performance improvements due to the recursive nature of the algorithm and the implied smaller size of the subarrays, for example using a simple sort algorithm like the insertion sort on the subarrays can provide performance gains.

## Implementation

## Use Cases

#### Additional Resources
