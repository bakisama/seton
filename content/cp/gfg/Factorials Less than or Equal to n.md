---
created: 2025-12-17
modified:
completed: true
platform: gfg
problem-id:
link: https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0
difficulty: Easy
tags:
  - gfg
---
# Factorials Less than or Equal to n | Practice | GeeksforGeeks

## Question
### Factorials Less than or Equal to n

A number **n** is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,  
Given a number **n**, the task is to return the list/vector of the factorial numbers smaller than or equal to n.

**Examples:**

```
Input: n = 3
Output: 1 2
Explanation: The first factorial number is 1 which is less than equal to n. The second number is 2 which is less than equal to n,but the third factorial number is 6 which is greater than n. So we print only 1 and 2.
```
```
Input: n = 6
Output: 1 2 6
Explanation: The first three factorial numbers are less than equal to n but the fourth factorial number 24 is greater than n. So we print only first three factorial numbers.
```

**Constraints:**  
1<=n<=10 <sup>18</sup>
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
    vector<long long> factorialNumbers(long long n) {
        vector<long long> vec;
        if (n<=1) return vec;
        for(int i = 1,temp=1;i<=n;){
            cout<<i<<" ";
            i=i*(++temp);
        }
        
    }
};
```

### Optimal Code
---
[!]
```cpp
vector<long long> result;

long long fact = 1;
long long k = 1;

while (fact <= n) {
  result.push_back(fact);
  k++;
  if (fact > n / k) break;  // prevent overflow
  fact *= k;
}

return result;
```

