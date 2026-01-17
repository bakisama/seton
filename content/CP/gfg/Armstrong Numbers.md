---
created: 2025-12-16
modified:
completed: true
platform: gfg
problem-id:
link: https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1
difficulty: Easy
tags:
  - gfg
  - cp/math
---
# Armstrong Numbers | Practice | GeeksforGeeks

## Question
### Armstrong Numbers

You are given a **3-digit** number **n**, Find whether it is an **Armstrong** number or not.

An *Armstrong number* of three digits is a number such that the sum of the cubes of its digits is equal to the *number* itself. 371 is an Armstrong number since 3 <sup>3</sup> \+ 7 <sup>3 </sup> \+ 1 <sup>3</sup> \= 371.

**Examples:**

```
Input: n = 153
Output: true
Explanation: 153 is an Armstrong number since 13 + 53 + 33 = 153.
```
```
Input: n = 372
Output: false
Explanation: 372 is not an Armstrong number since 33 + 73 + 23 = 378.
```
```
Input: n = 100
Output: false
Explanation: 100 is not an Armstrong number since 13 + 03 + 03 = 1.
```

**Constraints:**  
100 ≤ n <1000

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
// User function Template for C++
class Solution {
  public:
    bool armstrongNumber(int n) {
        int copy = n, ans = 0;
        while(copy!=0){
            ans += pow(copy%10,3);
            copy/=10;
        }
        return ans==n;
        
    }
};
```

### Optimal Code
---
[!]
```cpp

```

