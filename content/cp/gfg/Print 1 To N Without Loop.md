---
created: 2025-12-17
modified:
completed: true
platform: gfg
problem-id:
link: https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1
difficulty: Basic
tags:
---
# Print 1 To N Without Loop | Practice | GeeksforGeeks

## Question
### Print 1 To N Without Loop

You are given an integer **n**. You have  to print all numbers from **1** to **n**.  
**Note**: You must use **recursion** only,andprint all numbers from **1** to **n** in a single line, separated by spaces.

**Examples:  
**

```
Input: n = 10
Output: 1 2 3 4 5 6 7 8 9 10
```
```
Input: n = 5
Output: 1 2 3 4 5
```
```
Input: n = 1
Output: 1
```

**Constraints:**  
1 ≤ n ≤ 10 <sup>3</sup>

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
    void printNos(int n) {
        if(n==0) return;
        printNos(n-1);
        cout<<n<<" ";
    }
};
```

### Optimal Code
---
[!]
```cpp

```

