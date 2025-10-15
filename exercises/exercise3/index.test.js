import squareNumbers from "./index.js";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

describe("squareNumbers", () => {
  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(squareNumbers([]), []);
  });

  it("squares each positive number in the array", () => {
    assert.deepEqual(squareNumbers([1, 2, 3]), [1, 4, 9]);
  });

  it("squares each negative number in the array (resulting in positive squares)", () => {
    assert.deepEqual(squareNumbers([-2, -4]), [4, 16]);
  });

  it("handles a mix of positive, negative, and zero", () => {
    assert.deepEqual(squareNumbers([-3, 0, 5]), [9, 0, 25]);
  });

  it("works for a single element array", () => {
    assert.deepEqual(squareNumbers([5]), [25]);
  });
});
