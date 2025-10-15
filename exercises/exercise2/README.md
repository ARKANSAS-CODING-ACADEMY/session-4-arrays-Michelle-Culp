# Exercise 2: Filter Out Negative Numbers

**Objective:** Create a function that filters out negative numbers from an
array, returning a new array of only non-negative numbers.

## Task

- Implement a function `filterOutNegatives(numbers)` in the `index.js` file.
- The function should take an array of numbers and **return a new array**
  containing only the numbers that are **>= 0** (zero or positive).
- Negative numbers should be filtered out (excluded) from the result. If there
  are no non-negative numbers, return an empty array.

## Examples

```js
filterOutNegatives([3, -1, 2, -7, 0]); // should return [3, 2, 0]
filterOutNegatives([-5, -1, -3]); // should return []
filterOutNegatives([4, 6]); // should return [4, 6] (no negatives to remove)
```

## Details

- Loop through the input array and **collect** the values that are not negative
  (i.e., greater than or equal to zero).
- You can create a new array and `push` qualifying values into it.
- The original array should **not** be modified by your function (it should
  return a new array).
- Make sure to `return` the new array at the end.

## Setup

- Write your code in `index.js`. A starter function definition is provided.
- Run tests with `node --test` (or
  `node --test exercises/exercise2/index.test.js`) to check your work.
- Don't forget to export your function (e.g.,
  `module.exports = { filterOutNegatives };`) so the tests can use it.

Try out your function with `console.log` and different inputs to ensure it's
working as expected.
