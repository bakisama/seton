---
created: 2025-12-15
modified:
completed: true
platform: gfg
problem-id:
link: https://www.geeksforgeeks.org/problems/palindrome0746/1
difficulty: Easy
tags:
  - gfg
  - palindrome
---
# Palindrome | Practice | GeeksforGeeks

## Question
### Palindrome

You are given an integer `n`. Your task is to determine whether it is a palindrome.

> A number is considered a palindrome if it reads the same backward as forward, like the string examples "MADAM" or "MOM".

**Examples:**

```
Input: n = 555
Output: true
Explanation: The number 555 reads the same backward as forward, so it is a palindrome.
```
```
Input: n = 123
Output: false
Explanation: The number 123 reads differently backward (321), so it is not a palindrome.
```
```
Input: n = 1221
Output: true
```

**Constraints:**  
1 ≤ n ≤ 10 <sup>9</sup>

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
  bool isPalindrome(int n) {
    if (n < 0) {
      return false;
    }
    long rev = 0;
    int copy = n;
    while (n != 0) {
      rev *= 10;
      rev += n % 10;
      n /= 10;
    }
    // bool ans = copy==rev?true:false;
    return copy == rev ? true : false;
  }
};
```

### Optimal Code
---
[!]
```cpp

```

