---
created: 2025-12-15
modified:
completed: true
platform: gfg
problem-id:
link: https://www.geeksforgeeks.org/problems/reverse-bits3556/1
difficulty: Easy
tags:
  - gfg
  - cp/math
  - BitMagic
  - DataStructures
---
# Reverse Bits | Practice | GeeksforGeeks

## Question
### Reverse Bits

Given a **number x**, **reverse** its binary form and return the answer in **decimal**.

**Example 1:**

```
Input:
x = 1
Output:
2147483648 
Explanation:
Binary of 1 in 32 bits representation-
00000000000000000000000000000001
Reversing the binary form we get, 
10000000000000000000000000000000,
whose decimal value is 2147483648.
```

**Example 2:**

```
Input:
x = 5
Output:
2684354560 
Explanation:
Binary of 5 in 32 bits representation-
00000000000000000000000000000101
Reversing the binary form we get, 
10100000000000000000000000000000,
whose decimal value is 2684354560.
```

**Your Task:**  
You don't need to read input or print anything. Your task is to complete the function **reversedBits()** which takes an Integer **x** as input and returns the reverse binary form of **x** in decimal form.

**Expected Time Complexity:** O(log (x))  
**Expected Auxiliary Space:** O(1)

**Constraints:**  
0 <= x < 2 <sup>32</sup>

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
  #include <bit>
    long long reversedBits(long long x) {
    long long copy = x, i = 31, digit = 0, answer = 0, mult = 1;
    while(i>=0){
        mult = 1;
        digit = copy&1;
        copy = copy>>1;
        for(int j = 0; j<i;j++) mult *=2;
        i--;
        answer += digit*mult;
    }
    return answer;
    }
};
```

### Optimal Code
---
[!]
```cpp

```

