# Exercise 1: Sum of Numbers in an Array

**Objective:** Create a function that calculates the sum of all numbers in an
array.

## Task

- Implement a function `sumArray(numbers)` in the `index.js` file.
- The function should take an array of numbers and **return** the sum of all the
  numbers.
- If the array is empty, the function should return `0`.

## Example

```js
sumArray([1, 2, 3]); // should return 6
sumArray([]); // should return 0 (no elements to sum)
sumArray([5, -2, 7]); // should return 10 (works with negative numbers too)
```

## Details

- Use a loop (for or while) to iterate through the array and accumulate the
  total.
- Remember to return the final sum. (Using `console.log` alone won't be enough —
  we need to actually return the value.)
- **Hint:** You can start with a variable set to 0 and add each number to it as
  you loop.

## Setup

- Write your code in `index.js`. We've provided a function skeleton for you to
  fill in.
- After implementing, run `node --test` in the terminal to run the tests for
  this exercise (or run `node --test exercises/exercise1/index.test.js` for just
  this exercise).
- Make sure to export your function (e.g., `module.exports = { sumArray };`) so
  that the tests can import it.

Good luck! Feel free to test your function with `console.log` and some sample
inputs to ensure it's working before running the tests.
