---
created: 2025-12-15
modified:
completed: true
platform: Coding Ninjas
problem-id:
link: https://www.naukri.com/code360/problems/reverse-bits_2181102
difficulty: Moderate, Medium
tags:
  - CodingNinjas
---
# Reverse Bits - Naukri Code 360

## Problem statement

There is a song concert going to happen in the city. The price of each ticket is equal to the number obtained after reversing the bits of a given 32 bits unsigned integer ***‘n’***.

  

##### Sample Input 1:

```
2
0
12
```

##### Sample Output 1:

```
0
 805306368
```

##### Explanation For Sample Input 1:

```
For the first test case :
Since the given number N = 0 is represented as 00000000000000000000000000000000 in its binary representation. So after reversing the bits, it will become 00000000000000000000000000000000 which is equal to 0 only. So the output is 0.     

For the second test case :
Since the given number N = 12 is represented as 00000000000000000000000000001100 in its binary representation. So after reversing the bits, it will become 0110000000000000000000000000000, which is equal to 805306368 only. So the output is 805306368.
```

##### Sample Input 2:

```
2
6
4
```

##### Sample Output 2:

```
1610612736
 536870912
```

##### Explanation For Sample Input 1:

```
For the first test case :
Since the given number N = 6 is represented as 00000000000000000000000000000110 in its binary representation. So after reversing the bits, it will become 01100000000000000000000000000000, which is equal to 1610612736.

For the second test case :
Since the given number N = 4 is represented as 00000000000000000000000000000100 in its binary representation. So after reversing the bits, it will become 0010000000000000000000000000000, which is equal to 536870912 only.
```

##### Expected time complexity:

```
The expected time complexity is O(log(n)).
```

##### Constraints:

```
1 <= T <= 10
0 <= N <= 2^32

Time Limit: 1 sec
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
long reverseBits(long n) {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    long copy = n, digit = 0, answer = 0, mult = 1LL << 31, i = 31;
    while(i>=0){
        digit = copy&1;
        copy = copy>>1;
        if(digit==0){
            --i;
            mult = mult >> 1;
            continue;
        }
        --i;
        answer += digit*mult;
        mult = mult>>1;
    }
    return answer;
    
}
```

### Optimal Code
---
[!]
```cpp

```

