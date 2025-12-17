---
created: 2025-12-17
modified:
completed: false
platform:
"problem-id":
link: "https://www.geeksforgeeks.org/problems/reverse-an-array/0"
difficulty:
tags:
  - "/problem"
---
# Reverse an Array | Practice | GeeksforGeeks

## Question
### Reverse an Array

You are given an array of integers **arr\[\]**. You have to **reverse** the given array.

**Note:**Modify the array in place.

**Examples:  
**

```
Input: arr = [1, 4, 3, 2, 6, 5]
Output: [5, 6, 2, 3, 4, 1]
Explanation: The elements of the array are [1, 4, 3, 2, 6, 5]. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is [5, 6, 2, 3, 4, 1].
```
```
Input: arr = [4, 5, 2]
Output: [2, 5, 4]
Explanation: The elements of the array are [4, 5, 2]. The reversed array will be [2, 5, 4].
```
```
Input: arr = [1]
Output: [1]
Explanation: The array has only single element, hence the reversed array is same as the original.
```

**Constraints:  
**1 ≤ arr.size() ≤ 10 <sup>5</sup>  
0 ≤ arr\[i\] ≤ 10 <sup>5</sup>



If you are facing any issue on this page. Please let us know.

---

## Solution

### Intuition

### Approach

### Complexity
- Time:
- Space:

### Code
---
[!]
```cpp
class Solution {
 public:
  void reverseArray(vector<int> &arr) {
    int start = 0;
    int end = arr.size() - 1;
    int temp;
    while (start < end) {
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
};
```

### Optimal Code
---
[!]
```cpp
class Solution {
  public:
    void reverseArray(vector<int> &arr) {
        int start = 0;
        int end = arr.size() - 1;

        while (start < end) {
            std::swap(arr[start], arr[end]);
            start++;
            end--;
        }
    }
};

```

