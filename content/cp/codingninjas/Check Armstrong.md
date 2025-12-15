---
created: 2025-12-16
modified:
completed: true
platform: Coding Ninjas
problem-id:
link: https://www.naukri.com/code360/problems/check-armstrong_589?leftPanelTabValue=PROBLEM
difficulty: Moderate, Medium
tags:
  - CodingNinjas
  - cp/math
---
# Check Armstrong - Naukri Code 360

## Problem statement

You are given an integer ***'n'***. Return ***'true'*** if 'n' is an Armstrong number, and ***'false'*** otherwise.

  
An Armstrong number is a number (with 'k' digits) such that the sum of its digits raised to 'kth' power is equal to the number itself. For example, 371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371.  

**Sample Input 1:**
```
1
```

  

**Sample Output 1:**
```
true
```

  

**Explanation of Sample Input 1:**
```
1 is an Armstrong number as, 1^1 = 1.
```

  

**Sample Input 2:**
```
103
```

  

**Sample Output 2:**
```
false
```

  

**Sample Input 3:**
```
1634
```

  

**Sample Output 3:**
```
true
```

  

**Explanation of Sample Input 3:**
```
1634 is an Armstrong number, as 1^4 + 6^4 + 3^4 + 4^4 = 1634
```

  

Last saved at 1:35 AM

---

## Solution

### Intuition

### Approach
- Optimal approach is the precompute powers and store them in an array

### Complexity
- Time:
- Space:

### Code
---
[!]
```cpp
bool checkArmstrong(int n){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
	int copy = n, ans = 0, digits = 0;
    while(copy!=0){
            ++digits;
            copy/=10;
        }
        copy = n;
        while(copy!=0){
            ans += pow(copy%10,digits);
            copy/=10;
        }
        return ans==n;
        
    }


```

### Optimal Code
---
[!]
```cpp
int powar(int n, int times) {
  int mul = 1;
  while ((times--) != 0) {
    mul *= n;
  }
  return mul;
}
bool checkArmstrong(int n) {
  if (n == 0) return true;

  int copy = n, digits = 0;
  long long ans = 0;
  while (copy != 0) {
    ++digits;
    copy /= 10;
  }
  int powers[10];
  for (int i = 0; i < 10; i++) {
    powers[i] = powar(i, digits);
  }
  int copy1 = n;
  while (copy1 != 0) {
    ans += powers[copy1 % 10];
    if (ans > n) return false;
    copy1 /= 10;
  }
  if (ans == n)
    return true;
  else
    return false;
}
	
```

