# Exercise 3: Square Every Number

**Objective:** Create a function that squares each number in an array, returning
a new array of the squared values.

## Task

- Implement a function `squareNumbers(numbers)` in the `index.js` file.
- The function should take an array of numbers and **return a new array** where
  each element is the square of the corresponding element in the original array.
- The square of a number is that number multiplied by itself (e.g., square of 5
  is 25).

## Examples

```js
squareNumbers([1, 2, 3]); // should return [1, 4, 9]
squareNumbers([-2, 0, 4]); // should return [4, 0, 16]
squareNumbers([]); // should return [] (empty array -> empty result)
```

## Details

- Loop through the input array and compute the square of each number.
- Collect the squared numbers in a new array (do not modify the original array).
- Return the new array.
- Each element in the result should correspond to the element at the same index
  in the input, but squared.

## Setup

- Write your code in `index.js`. A starter function is provided.
- Run the tests with `node --test` (or
  `node --test exercises/exercise3/index.test.js`).
- Export your function (`module.exports = { squareNumbers };`) so that it can be
  tested.
