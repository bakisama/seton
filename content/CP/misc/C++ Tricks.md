---
title: C++ Tricks
---
# 🧠 C++11 + Codeforces Tricks — Deep Competitive Programming Notes

# 1️⃣ Brace Initialization Everywhere `{}`

## 🔹 Concept

C++11 allows assigning values using `{}` instead of `make_pair`, `push_back`, etc.

### Instead of:

```cpp
pair<int,int> p = make_pair(3,4);
```

### You can write:

```cpp
pair<int,int> p = {3,4};
```

---

## 🔹 Works With

- `pair`
    
- `tuple`
    
- `vector`
    
- `deque`
    
- `set`
    
- `list`
    
- `array`
    
- nested containers
    

---

## 🔹 Why This Matters in Contests

### ✅ Less typing

### ✅ Cleaner code

### ✅ Fewer mistakes

Example:

```cpp
vector<int> v;
v = {1,2,5,2};
```

Instead of multiple `push_back` calls.

---

## 🔹 Important Behavior: Sets Remove Duplicates

```cpp
set<int> s = {4,6,2,7,4};
```

Result:

```
2 4 6 7
```

Because sets:

- Sort automatically
    
- Remove duplicates
    

---

## 🔹 Does NOT Work For

- `stack`
    
- `queue`
    

Because they don't support initializer list assignment.

---

# 2️⃣ Powerful Debugging Macro (`#` Operator)

## 🔹 Macro Stringification

```cpp
#define what_is(x) cerr << #x << " is " << x << endl;
```

`#x` converts argument name into a string.

---

### Example:

```cpp
int a = 376;
what_is(a);
```

Output:

```
a is 376
```

---

## 🔹 Why This Is Extremely Useful

In contests:

- Debugging time is critical
    
- Printing multiple variables quickly helps
    

Advanced version (variadic debug macro) prints multiple variables with names automatically.

---

## 🔹 Conceptual Insight

This uses:

- Preprocessor stringification
    
- Variadic templates
    
- Recursion over template arguments
    

This is a powerful example of:

> C++ metaprogramming assisting runtime debugging

---

# 3️⃣ `#include <bits/stdc++.h>`

## 🔹 What It Does

Includes almost all standard libraries at once.

Instead of:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>
#include <map>
...
```

Just write:

```cpp
#include <bits/stdc++.h>
```

---

## 🔹 Why Competitive Programmers Love It

- Saves time
    
- Avoids missing headers
    
- Works on Codeforces and most GCC-based judges
    

---

## ⚠️ Not Standard C++

It’s a GCC extension.  
Do NOT use in production or interviews.

---

# 4️⃣ Hidden GCC Built-ins (Bit Tricks)

These are extremely useful in bit manipulation problems.

---

## 🔹 1) `__gcd(a, b)`

Returns greatest common divisor.

```cpp
__gcd(18, 27) → 9
```

### Contest Use:

- Number theory
    
- Fraction simplification
    
- Checking coprimality
    

---

## 🔹 2) `__builtin_popcount(x)`

Counts number of 1 bits.

```cpp
__builtin_popcount(14)  // 1110 → 3
```

### Used in:

- Bitmask DP
    
- Subset problems
    
- Hamming weight
    

---

## 🔹 3) `__builtin_ctz(x)`

Counts trailing zeros.

```cpp
__builtin_ctz(16)  // 10000 → 4
```

Useful for:

- Lowest set bit
    
- Binary tricks
    
- Fast factor of 2 counting
    

---

## 🔹 4) `__builtin_clz(x)`

Counts leading zeros (32-bit integer).

Useful for:

- Finding highest set bit
    
- Fast log2 calculation
    

Example:

```cpp
int highest_bit = 31 - __builtin_clz(x);
```

---

## 🔹 5) `__builtin_ffs(x)`

Find first set bit (1-based index).

---

## ⚠️ Important Edge Case

For:

- `clz`
    
- `ctz`
    

If `x == 0` → **undefined behavior**

Always check first.

---

# 5️⃣ Variadic Templates (Advanced but Powerful)

## 🔹 What They Are

Functions that accept unlimited parameters.

Example:

```cpp
template<typename T, typename... Args>
T sum(T a, Args... args) {
    return a + sum(args...);
}
```

---

## 🔹 Why This Is Powerful

Enables:

- Flexible debugging
    
- Custom logging tools
    
- Generic helper functions
    

---

## 🔹 Conceptual Importance

Uses:

- Template parameter packs
    
- Recursive template expansion
    

This is part of:

> Compile-time polymorphism

---

# 6️⃣ `tie`, `tuple`, and `ignore`

## 🔹 Assign Multiple Values at Once

```cpp
int a,b,c;
tie(a,b,c) = make_tuple(1,2,3);
```

---

## 🔹 Swap Trick

```cpp
tie(a,b) = make_tuple(b,a);
```

---

## 🔹 Ignore Values

```cpp
tie(b, ignore, a, ignore) = t;
```

Very useful in:

- Graph algorithms
    
- Dijkstra
    
- Multi-value priority queues
    

---

# 7️⃣ `emplace_back` vs `push_back`

## 🔹 Key Difference

`push_back(x)`:

- Creates object
    
- Copies/moves into vector
    

`emplace_back(args...)`:

- Constructs object directly in-place
    

---

## 🔹 Example

```cpp
v.emplace_back(a, b);
```

Instead of:

```cpp
v.push_back(make_pair(a,b));
```

---

## 🔹 Why Faster?

Avoids temporary object creation.

Important in:

- Heavy structures
    
- Large vectors
    
- Performance-critical problems
    

---

# 8️⃣ Lambda Functions (Deeper Understanding)

General form:

```cpp
[capture](params) -> return_type { body }
```

---

## 🔹 Capture Types

|Syntax|Meaning|
|---|---|
|`[&]`|capture all by reference|
|`[=]`|capture all by value|
|`[x]`|capture only x|
|`[&x]`|capture x by reference|

---

## 🔹 Sorting Example

```cpp
sort(v.begin(), v.end(), [](int a, int b){
    return a > b;
});
```

---

## 🔹 Why Lambdas Are Revolutionary

Before:

- Needed global variables
    
- Needed struct functors
    

Now:

- Fully local logic
    
- Cleaner code
    
- Less risk
    

---

# 9️⃣ Move Semantics (`move()`)

## 🔹 What It Does

Transfers ownership instead of copying.

```cpp
vector<int> w = move(v);
```

After this:

- `v` becomes empty (valid but unspecified)
    
- `w` owns the data
    

---

## 🔹 Why Important in Contests

- Returning large containers is cheap
    
- Efficient container transfers
    
- Less worry about performance
    

---

# 🔟 Raw Strings

## 🔹 Syntax

```cpp
string s = R"(Hello\nWorld)";
```

Output:

```
Hello\nWorld
```

No escape processing.

---

## 🔹 Useful For

- Regex patterns
    
- Multiline strings
    
- Complex input templates
    

---

# 1️⃣1️⃣ Regular Expressions (`regex`)

Example:

```cpp
regex r(R"([a-z]+)");
```

Useful but:

⚠️ Generally too slow for competitive programming.

Use only when:

- Input constraints are small
    
- Parsing complexity is high
    

---

# 1️⃣2️⃣ User-Defined Literals

Example:

```cpp
long long operator "" _km(unsigned long long x){
    return x * 1000;
}
```

Then:

```cpp
12_km → 12000
```

---

## 🔹 Contest Use?

Rare.

Mostly interesting for:

- Language mastery
    
- Library design
    

---

# 1️⃣3️⃣ Smart Loop Macro (`rep`)

```cpp
#define rep(i, begin, end) ...
```

Allows forward and backward loops automatically.

---

## ⚠️ Warning

Macros can:

- Obscure logic
    
- Complicate debugging
    
- Cause weird errors
    

Use carefully.

---
