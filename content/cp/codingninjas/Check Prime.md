---
created: 2025-12-17
modified:
completed: false
platform: Coding Ninjas
problem-id:
link: https://www.naukri.com/code360/problems/check-prime_624934?leftPanelTabValue=PROBLEM
difficulty:
tags:
  - CodingNinjas
  - cp/math
---
# Check Prime | Naukri Code 360

## Problem Statement

A prime number is a positive integer that is divisible by exactly two integers:
- 1
- the number itself

I am given an integer `n` and I need to determine whether it is prime or not.

---

## Examples

### Example 1
Input: 5  
Output: YES

```
Explanation:  
5 is divisible only by 1 and 5.
```

### Example 2
Input: 6  
Output: NO

```
Explanation:  
6 is divisible by 1, 2, 3, and 6, so it is not prime.
```
### Example 3
Input: 1  
Output: NO

```
Explanation:  
1 has only one divisor and is neither prime nor composite.

```
## Constraints
1 ≤ n ≤ 10^9  
Expected Time Complexity: O(√n)



---

## Solution

### Intuition

To check if a number `n` is prime, I need to see whether it has **any divisor other than 1 and itself**.

A naive approach would check all numbers from `2` to `n - 1`, but this would be too slow for large `n`.

The key insight is that **I only need to check divisors up to √n**.

---

## Why Checking Up to √n Works

If `n` is not prime, then it can be written as:

$$
n = a \times b
$$

If both `a` and `b` were greater than √n, then:

$$
a \times b > \sqrt{n} \times \sqrt{n} = n
$$

This is impossible.

So, at least one of the factors must be **less than or equal to √n**.

Therefore, checking divisibility up to √n is sufficient to determine whether `n` is prime.

---

## Approach (√n Method)

1. If `n ≤ 1`, return `false`
2. Iterate from `2` to `⌊√n⌋`
3. If any number divides `n`, return `false`
4. Otherwise, return `true`

---

## Code (√n Approach)


```cpp
#include <cmath>

bool isPrime(int n) {
    if (n <= 1) return false;

    int root = std::sqrt(n);
    for (int i = 2; i <= root; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
```

---

## Complexity Analysis (√n Approach)

- **Time Complexity:** O(√n)
    
- **Space Complexity:** O(1)
    

This approach is efficient enough for values of `n` up to `10^9`.

---

## Optimal Approach — 6k ± 1 Optimization

---

## Observation

Any integer can be written in the form:

$$  
6k + r \quad \text{where } r \in {0,1,2,3,4,5}  
$$

- `6k` → divisible by 6
    
- `6k + 2`, `6k + 4` → even
    
- `6k + 3` → divisible by 3
    

So, any number greater than 3 that is prime **must** be of the form:

$$  
6k \pm 1  
$$

This allows me to skip unnecessary checks.

---

## Optimized Approach

1. Handle small cases (`n ≤ 3`)
    
2. Eliminate multiples of 2 and 3
    
3. Check only numbers of the form `6k - 1` and `6k + 1` up to √n
    

---

## Optimal Code (6k ± 1)

```cpp
#include <cmath>

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 == 0 || n % 3 == 0)
        return false;

    for (int i = 5; 1LL * i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}
```

---

## Complexity Analysis (Optimal Approach)

- **Time Complexity:** O(√n)
    
- **Space Complexity:** O(1)
    

Although the asymptotic complexity remains the same, this method significantly reduces constant factors and is faster in practice.

---

## Key Takeaways

- A number only needs to be checked for divisibility up to √n
    
- If `n` has a divisor greater than √n, it must also have one smaller than √n
    
- The `6k ± 1` optimization skips all multiples of 2 and 3
    
- This is the standard and most efficient way to check primality for large integers
    
---
