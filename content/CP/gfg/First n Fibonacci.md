---
created: 2025-12-18
modified:
completed: true
platform: gfg
problem-id:
link: https://www.geeksforgeeks.org/problems/print-first-n-fibonacci-numbers1002/1
difficulty: Basic, Easy
tags:
  - gfg
---
# First n Fibonacci | Practice | GeeksforGeeks

## Question
### First n Fibonacci

Given a number **n,** return an array containing the first **n** Fibonacci numbers.  
Note: The first two numbers of the series are 0 and 1.

**Examples:**

```
Input: n = 5
Output: [0, 1, 1, 2, 3]
```
```
Input: n = 7
Output: [0, 1, 1, 2, 3, 5, 8]
```
```
Input: n = 2
Output: [0, 1]
```

**Constraints:**  
1 <= n <= 30

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
// User function template for C++

class Solution {
  public:
    // Function to return list containing first n fibonacci numbers.
    vector<int> fibonacciNumbers(int n) {
        vector<int> ans;
        if(n==1)
        {ans.emplace_back(0);return ans;}
        ans.emplace_back(0);
        if(n==2)
        {ans.emplace_back(1);return ans;}
        ans.emplace_back(1);
        for(int i = 2;i<n;i++){
            ans.emplace_back((ans[i-1]+ans[i-2]));
        }
        return ans;

    }
};
```

### Optimal Code
---
[!]
```cpp

```

