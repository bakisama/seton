---
created: 2025-12-15
modified:
completed: true
platform: Coding Ninjas
problem-id:
link: https://www.naukri.com/code360/problems/nth-fibonacci-number_74156
difficulty: Easy
tags:
  - CodingNinjas
---
# Nth Fibonacci Number - Naukri Code 360

## Problem statement

The n-th term of Fibonacci series F(n), where F(n) is a function, is calculated using the following formula -

```
F(n) = F(n - 1) + F(n - 2), 
    Where, F(1) = 1, F(2) = 1
```

  

Provided ***'n'*** you have to find out the n-th Fibonacci Number. Handle edges cases like when 'n' = 1 or 'n' = 2 by using conditionals like if else and return what's expected.

```
"Indexing is start from 1"
```

  

**Example:**
```
Input: 6

Output: 8

Explanation: The number is ‘6’ so we have to find the “6th” Fibonacci number.
So by using the given formula of the Fibonacci series, we get the series:    
[ 1, 1, 2, 3, 5, 8, 13, 21]
So the “6th” element is “8” hence we get the output.
```

##### Sample Input 1:

```
6
```

  

##### Sample Output 1:

```
8
```

  

##### Explanation of sample input 1:

```
The number is ‘6’ so we have to find the “6th” Fibonacci number.
So by using the given formula of the Fibonacci series, we get the series:    
[ 1, 1, 2, 3, 5, 8, 13, 21]
So the “6th” element is “8” hence we get the output.
```

  

##### Expected time complexity:

```
The expected time complexity is O(n).
```

  

##### Constraints:

```
1 <= 'n' <= 10000     
Where ‘n’ represents the number for which we have to find its equivalent Fibonacci number.

Time Limit: 1 second
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
#include<bits/stdc++.h>
using namespace std;
int main()
{
        ios::sync_with_stdio(false);
        cin.tie(nullptr);
        int n;
        int ans;
        cin>>n;
        if(n==0){
                ans = 0;
        }
        else if(n==1||n==2){
                ans=1;;
        }
        else{
                
                int a, b;
                a = b = 1;
                for(int i = 2; i<n;i++){
                        ans = a+b;
                        a = b;
                        b = ans;
                }  
        }
        cout<<ans;
}
```

### Optimal Code
---
[!]
```cpp

```

