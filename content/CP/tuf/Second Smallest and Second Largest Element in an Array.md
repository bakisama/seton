---
title: Second Smallest and Second Largest Element in an Array
---
## Problem Statement

I am given an array of integers of size `n`.  
My task is to find:

- the **second smallest** element
- the **second largest** element

If either does not exist, I should return `-1` for that value.

---

## Examples

### `Example 1`

Input: [1, 2, 4, 7, 7, 5]  
Output: Second Smallest = 2, Second Largest = 5

`### Example 2`

Input: [1]  
Output: -1 -1

`### Example 3`

Input: [5, 5, 5]  
Output: -1 -1


Complexity Analysis

    Time Complexity: O(n)

    Space Complexity: O(1)

This is optimal since I must inspect every element at least once.
Edge Cases to Remember

    Array size < 2 → no second elements

    All elements equal → no second smallest or largest

    Duplicate largest/smallest values should be ignored

---  
## Intuition  
To find the second smallest and second largest elements, I need **distinct values**.  
A naive idea would be: 
- sort the array 
- take the second element from start and end  

However, sorting costs **O(n log n)** time, which is unnecessary.  

I can do this more efficiently using a **single traversal**.  

---  
## Key Observations  
- The **smallest** and **largest** elements are easy to track. 
- The **second smallest** must be:  
	- greater than the smallest  
	- smaller than all other candidates
- The **second largest** must be:  
	- smaller than the largest  
	- greater than all other candidates 
---  
## Optimal Approach (Single Pass)

### Strategy

I maintain four variables:
- `smallest`
- `secondSmallest`
- `largest`
- `secondLargest`

I iterate through the array once and update these values carefully.

---

## Algorithm

1. Initialize:
   - `smallest = +∞`
   - `secondSmallest = +∞`
   - `largest = -∞`
   - `secondLargest = -∞`

2. For each element `x` in the array:
   - If `x < smallest`:
     - `secondSmallest = smallest`
     - `smallest = x`
   - Else if `x > smallest` and `x < secondSmallest`:
     - `secondSmallest = x`

   - If `x > largest`:
     - `secondLargest = largest`
     - `largest = x`
   - Else if `x < largest` and `x > secondLargest`:
     - `secondLargest = x`

1. If `secondSmallest` or `secondLargest` was never updated, return `-1`.

---
## Code (Optimal – O(n))

```cpp
#include <climits>
#include <vector>
using namespace std; 

pair<int, int> secondSmallestAndLargest(vector<int> &arr) {
    int n = arr.size();
    if (n < 2) return {-1, -1};

    int smallest = INT_MAX, secondSmallest = INT_MAX;
    int largest = INT_MIN, secondLargest = INT_MIN;

    for (int x : arr) {
        // For smallest
        if (x < smallest) {
            secondSmallest = smallest;
            smallest = x;
        } 
        else if (x > smallest && x < secondSmallest) {
            secondSmallest = x;
        }

        // For largest
        if (x > largest) {
            secondLargest = largest;
            largest = x;
        } 
        else if (x < largest && x > secondLargest) {
            secondLargest = x;
        }
    }

    if (secondSmallest == INT_MAX || secondLargest == INT_MIN)
        return {-1, -1};

    return {secondSmallest, secondLargest};
}
```
---

## Complexity Analysis

- **Time Complexity:** O(n)
    
- **Space Complexity:** O(1)
    

This is optimal since I must inspect every element at least once.

---

## Edge Cases to Remember

 - Array size < 2 → no second elements
    
- All elements equal → no second smallest or largest
    
- Duplicate largest/smallest values should be ignored
    

---