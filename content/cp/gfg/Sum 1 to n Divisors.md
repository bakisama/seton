---
created: 2025-12-16
modified:
completed: true
platform: gfg
problem-id:
link: https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1
resource: https://www.geeksforgeeks.org/dsa/sum-divisors-1-n/
difficulty: Easy
tags:
  - gfg
  - cp/math
  - CodingNinjas
---
# Sum of Divisors from 1 to n | Practice | GeeksforGeeks

---
## Problem Statement

Given a positive integer **n**, compute:

$$
\sum_{i=1}^{n} F(i)
$$

where **F(i)** is defined as the sum of all positive divisors of **i**.

---

## Examples

### Example 1

Input: n = 4  
Output: 15

Explanation:
```
F(1) = 1  
F(2) = 1 + 2 = 3  
F(3) = 1 + 3 = 4  
F(4) = 1 + 2 + 4 = 7``

Total = 1 + 3 + 4 + 7 = 15
```

```

---

### Example 2
```

Input: n = 5  
Output: 21

```

Explanation:
```

F(1) = 1  
F(2) = 3  
F(3) = 4  
F(4) = 7  
F(5) = 6

Total = 21

```

---

### Example 3
```

Input: n = 1  
Output: 1

```

---

## Constraints
```

1 ≤ n ≤ 10^5


## Solution

---

## Intuition

A direct approach would be:
- For every number `i` from `1` to `n`
- Find all divisors of `i`
- Add them to the answer

However, this leads to a **nested loop** and runs in **O(n²)** time, which is too slow.

To optimize, we need to avoid explicitly finding divisors for every number.

---

## Key Insight — Contribution Method

Instead of asking:

> “What are the divisors of each number `i`?”

We flip the perspective and ask:

> **“For a fixed number `j`, how many numbers between `1` and `n` does `j` divide?”**

---

## Observation

A number `j` divides the following numbers:

$$
j, 2j, 3j, \dots, \left\lfloor \frac{n}{j} \right\rfloor j
$$

So, `j` divides exactly:

$$
\left\lfloor \frac{n}{j} \right\rfloor
$$

numbers in the range `[1, n]`.

---

## Contribution of a Number

Each time `j` divides a number, it contributes `j` to the total sum.

Therefore:

$$
\text{Contribution of } j = j \times \left\lfloor \frac{n}{j} \right\rfloor
$$

---

## Final Formula

Summing contributions of all numbers from `1` to `n`:

$$
\text{Answer} = \sum_{j=1}^{n} j \times \left\lfloor \frac{n}{j} \right\rfloor
$$

This computes the total sum of divisors without explicitly enumerating them.

---

## Approach (O(n))

1. Initialize `ans = 0`
2. Loop `j` from `1` to `n`
3. Add `j × (n / j)` to `ans`
4. Return `ans`

---

## Complexity Analysis (O(n) Solution)

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

---

## Naive Code (For Reference – O(n²))

```cpp
int sumOfAllDivisors(int n){
    long long ans = 0;
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= i; j++){
            if(i % j == 0)
                ans += j;
        }
    }
    return ans;
}
```

---

## Optimized Code (Contribution Method – O(n))

```cpp
long long sumOfAllDivisors(int n){
    long long ans = 0;
    for(int j = 1; j <= n; j++){
        ans += 1LL * j * (n / j);
    }
    return ans;
}
```

---

## Further Optimization — √n Approach (Range Grouping)

The value:

$$ 
\left\lfloor \frac{n}{i} \right\rfloor  
$$

remains constant over **ranges of `i`**.  
We can process each such range in one step.

---

### Key Idea

If:

$$
q = \left\lfloor \frac{n}{i} \right\rfloor  
$$

then the value remains the same for all:

$$
i \le x \le \left\lfloor \frac{n}{q} \right\rfloor  
$$

So we process `[i, r]` as a block.

---

## √n Optimized Code

```cpp
long long sumOfAllDivisors(long long n){
    long long ans = 0;

    for(long long i = 1; i <= n; ){
        long long q = n / i;
        long long r = n / q;

        long long sumRange = (r - i + 1) * (i + r) / 2;
        ans += q * sumRange;

        i = r + 1;
    }

    return ans;
}
```

---

## Complexity Analysis (√n Solution)

- **Time Complexity:** `O(√n)`
    
- **Space Complexity:** `O(1)`
    

---