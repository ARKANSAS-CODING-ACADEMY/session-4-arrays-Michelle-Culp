# Intro to JavaScript – Session 4

**Arrays**

- **Focus:** Build on Session 3 (functions & objects) by introducing **arrays**
  – a way to store multiple values in one variable.
- We’ll learn what arrays are, how to create and use them, and common operations
  like adding/removing elements and looping through arrays.
- **Environment:** Continue using Node.js in GitHub Codespaces. (A browser
  environment is available since Session 3, but we’ll primarily use it starting
  Session 5.)

---

## Getting Started in Codespaces

- **Open Codespace:** Launch this repository in GitHub Codespaces (Node.js v18+
  is pre-installed).
- **Node REPL vs Script:** In the terminal, run `node` to open an interactive
  REPL, or run a file with `node filename.js`. Use the REPL for quick
  experiments and scripts for writing and running longer code.
- **Running Tests:** To check your exercise solutions, run `node --test` in the
  terminal (this finds and runs all `*.test.js` files). You can also run a
  specific test file with
  `node --test exercises/<exercise_folder>/<file>.test.js`.
- **Goal:** Ensure all tests pass. If a test fails, use the error message and
  output to debug. Tests help verify your solution.

---

## Why Use Arrays?

- When we need to store **multiple values**, an array helps group them in one
  place.
- Without arrays, you'd have to use separate variables for each item (hard to
  manage, especially if the list grows long).
- An
  [**array**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  lets us keep an ordered list of items under a single variable name.
- Arrays make it easy to loop through items and apply the same operation to each
  one.
- _Real-world example:_ If you have 100 product prices, an array of prices lets
  you calculate the total with a loop, instead of handling 100 separate
  variables.

---

## Creating an Array

- Use square brackets `[...]` to create an array literal. Separate items with
  commas.
- You can store any type of data in an array: numbers, strings, booleans, even
  other arrays. (Usually, items are related in context.)
- Example of an array with 5 items:
  ```js
  const colors = ["red", "green", "blue", "yellow", "purple"];
  console.log(colors);
  // Output: [ "red", "green", "blue", "yellow", "purple" ]
  ```

* You can also create an empty array: `const emptyList = [];` (length 0).

---

## Accessing Array Elements

- Arrays are **indexed** from 0. The first element is index 0, second is index
  1, and so on.
- Use bracket notation to read or change a value: `arrayName[index]`.
- For example:

  ```js
  const fruits = ["apple", "banana", "cherry"];
  console.log(fruits[1]); // "banana" (second item, index 1)
  fruits[2] = "orange"; // change the third item from "cherry" to "orange"
  console.log(fruits); // [ "apple", "banana", "orange" ]
  ```
- If you use an index that’s out of range (too high or negative), the result is
  `undefined` (not an error).

---

## The `length` Property

- `arrayName.length` gives the number of elements in the array.
- It's updated automatically as you add or remove items.
- Example:

  ```js
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.length); // 3
  fruits.push("grape");
  console.log(fruits.length); // 4 (after adding one)
  ```
- You can use `length` to access the last item: its index is `array.length - 1`.
- If an array is empty, `length` is 0.

---

## Adding Items to an Array

- Use
  [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  to add one or more elements to the **end** of an array.
- Use
  [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
  to add to the **beginning** of an array.
- Both methods modify the array. `push` returns the new length of the array.
- Example using `push`:

  ```js
  const scores = [10, 20, 30];
  scores.push(40);
  console.log(scores); // [10, 20, 30, 40]
  ```

  _(Now the array has 4 elements, with "40" added at the end.)_

---

## Removing Items from an Array

- Use
  [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
  to remove the **last** element of an array.
- Use
  [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
  to remove the **first** element.
- Both methods modify the array. `pop` returns the element that was removed.
- Example using `pop`:

  ```js
  const scores = [10, 20, 30, 40];
  const lastScore = scores.pop();
  console.log(lastScore); // 40
  console.log(scores); // [10, 20, 30]
  ```

  _(The last element "40" was removed. `lastScore` holds the removed value.)_

---

## In-Class Exercise: Working with an Array

- **Task:** Create an array of **3 of your favorite things** (e.g. foods, songs,
  places).

  - Use `console.log` to print the entire array.
  - Access the **second** item (index `1`) and print it.
  - Change the second item to a different value.
  - Use `push()` to add a new item to the end of the array.
  - Use `pop()` to remove the last item of the array.
  - Print the array after each operation to see the changes.
- **Check:** Ensure the outputs make sense (the array content should update as
  expected after each step).

---

## Looping Through Arrays

- Often we want to **process every element** of an array (e.g. print each item,
  sum them up, etc.).
- We can use a `for` loop to iterate over indexes from `0` to
  `array.length - 1`.
- JavaScript also has a convenient
  [`for...of` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  that directly gives each element in the array.
- Using loops with arrays lets us automate repetitive tasks over all elements,
  no matter how many.

---

## Example: Using a `for` Loop

```js
const numbers = [5, 10, 15];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log("Element:", numbers[i]);
  total += numbers[i];
}
console.log("Sum:", total);
// Output:
// Element: 5
// Element: 10
// Element: 15
// Sum: 30
```

_(This loop goes through each index and uses `numbers[i]` to access each
value.)_

---

## Example: Using a `for...of` Loop

```js
const numbers = [5, 10, 15];
let total = 0;
for (const num of numbers) {
  console.log("Element:", num);
  total += num;
}
console.log("Sum:", total);
// Output is the same as above.
```

_(The `for...of` loop simplifies array iteration by giving each element
directly. `num` takes on each value in the array in order.)_

---

## In-Class Exercise: Summing an Array

- **Task:** Write code to calculate the **sum** of all numbers in an array.
- For example, if the array is `[2, 4, 6]`, the sum should be `12`.
- Try it: create a sample array of numbers in a script or the Node REPL. Use a
  loop to add them up into a running total.
- **Check:** Print out the total and verify that it matches what you expect (you
  can manually add the numbers to double-check).

---

## Checking for a Value in an Array

- Sometimes we need to find out if an array contains a certain value.
- [`indexOf(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  returns the index of the value if found, or `-1` if not found.
- [`includes(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
  returns `true` if the array contains the value (and `false` if not).
- Example:

  ```js
  const animals = ["cat", "dog", "bird"];
  console.log(animals.includes("dog")); // true
  console.log(animals.indexOf("dog")); // 1  (the index of "dog")
  console.log(animals.includes("elephant")); // false
  console.log(animals.indexOf("elephant")); // -1 (not found)
  ```
- Use whichever is convenient: `includes` is great for a quick yes/no check,
  while `indexOf` is useful if you need the exact position.

---

## Filtering and Transforming Arrays (Advanced)

- JavaScript provides methods to handle common array tasks without writing
  explicit loops:

  - [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    – runs a function on each array element (like a loop, but in method form).
  - [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    – creates a **new array** by transforming each element in the original array
    (for example, squaring each number).
  - [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    – creates a **new array** with only the elements that pass a given condition
    (filtering out others).
- These methods use functions as arguments (you can define an inline function or
  use an arrow function).
- For example, instead of writing a loop to get only positive numbers:

  ```js
  let positiveNums = numbers.filter((n) => n >= 0);
  ```

  And to square every number in an array:

  ```js
  let squares = numbers.map((n) => n * n);
  ```

---

## Arrays and Objects Together

- Arrays and objects can be combined to represent more complex data:

  - An **array of objects:** for example, an array of user profiles, where each
    element is an object (each object might have properties like name, age,
    etc.).
  - An **object with array properties:** for example, an object `player` with a
    property `scores` that is an array of score values.
- You access data by chaining notation:

  - For an array of objects: `players[0].name` gives the `name` of the first
    player object.
  - For an object with an array: `player.scores[1]` gives the second score.

---

## Arrays and Objects Example

- Example:

  ```js
  const player = {
    name: "Alice",
    scores: [10, 15, 20],
  };
  console.log(player.name); // "Alice"
  console.log(player.scores[2]); // 20
  ```
- This combined usage is very common in real programs (e.g., an array of
  shopping cart items, each item an object).

---

## Arrays: Summary

- An array is an ordered list of values. Use `[]` to create one and commas to
  separate items.
- Array indices start at **0**. Use `arr[index]` to access or modify a value.
- Use `arr.length` to get the number of elements (last index is `length - 1`).
- Common methods:

  - Add: `push` (end), `unshift` (start).
  - Remove: `pop` (end), `shift` (start).
- Loop through arrays with `for` or `for...of` to process each element.
- Arrays are versatile: you can search within them (`includes`, `indexOf`),
  build new arrays with transformations (`map`, `filter`), and much more.

---

## Take-Home Exercises

- Now it's time to practice these concepts. In the `exercises/` folder, you'll
  find several exercise subfolders (`exercise1`, `exercise2`, `exercise3`).
- Each exercise contains:

  - A **README.md** with the problem description.
  - An **index.js** file where you'll write your solution.
  - An **index.test.js** file with tests (do not modify the tests).
- Open each exercise's README for detailed instructions. Write your code in the
  corresponding `index.js`.
- Run the tests with `node --test` (in the terminal) to check your solutions.
  You can run all tests at once from the root, or run a specific test file
  (e.g., `node --test exercises/exercise1/index.test.js`).
- Aim to get all tests passing. If a test fails, read the error message to
  understand what's expected, fix your code, and run the tests again.
