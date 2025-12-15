---
created: 2025-12-15
modified:
completed: true
platform: Coding Ninjas
problem-id:
link: https://www.naukri.com/code360/problems/palindrome-number_624662?leftPanelTabValue=PROBLEM
difficulty: Easy
tags:
  - CodingNinjas
  - palindrome
---
# Palindrome number - Naukri Code 360

Check whether a given number ***’n’*** is a palindrome number.  

**Note:**
```
Palindrome numbers are the numbers that don't change when reversed.
You don’t need to print anything. Just implement the given function.
```
**Example:**
```
Input: 'n' = 51415
Output: true
Explanation: On reversing, 51415 gives 51415.
```

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
bool palindrome(int n)
{
    if(n<0)
    {
            return false;
    }
        long rev = 0;
        int copy = n;
        while(n!=0){
            rev*=10;
            rev += n%10;
            n/=10;
        }
        // bool ans = copy==rev?true:false;
        return copy==rev?true:false;
}
```

### Optimal Code
---
[!]
```cpp

```

