---
created: 2025-12-15
modified:
completed: true
platform: gfg
problem-id:
link: https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1
difficulty: Basic
tags:
  - gfg
  - cp/math
---
# LCM And GCD | Practice | GeeksforGeeks

## Question
### LCM And GCD

Given two integers a and b, You have to compute their LCM and GCD and return an array containing their LCM and GCD.

**Examples:**

```
Input: a = 5 , b = 10
Output: [10, 5]
Explanation: LCM of 5 and 10 is 10, while their GCD is 5.
```
```
Input: a = 14 , b = 8
Output: [56, 2]
Explanation: LCM of 14 and 8 is 56, while their GCD is 2.
```
```
Input: a = 1 , b = 1
Output: [1, 1]
Explanation: LCM of 1 and 1 is 1, while their GCD is 1.
```

**Constraints:**  
1 ≤ a, b ≤ 10 <sup>4</sup>


---

## Solution

### Intuition
- Euclidean Algorithm for GCD?
- Eureka!!!
	- `LCM(a, b) * GCD(a, b) = a * b`

### Approach
- Calculate GCD with Euclid's Algorithm, then
- `LCM(a, b) = |a * b| / GCD(a, b)`
### Complexity
- Time:
- Space:

### Code
---
[!]
```cpp
// Using internal gcd in C++ 17
class Solution {
  public:
  #include <numeric>
    vector<int> lcmAndGcd(int a, int b) {
        vector<int> ans;
        int ans_gcd = (gcd(a,b));
        ans.emplace_back((a*b)/ans_gcd);
        ans.emplace_back(ans_gcd);
        return ans;
    }
};

// Implementing GCD Function
class Solution {
  public:
  int gcd (int a, int b) {
    if (b == 0)
        return a;
    else
        return gcd (b, a % b);
}
    vector<int> lcmAndGcd(int a, int b) {
        vector<int> ans;
        int ans_gcd = (gcd(a,b));
        ans.emplace_back((a*b)/ans_gcd);
        ans.emplace_back(ans_gcd);
        return ans;
    }
};
```

### Optimal Code
---
[!]
```cpp

```

