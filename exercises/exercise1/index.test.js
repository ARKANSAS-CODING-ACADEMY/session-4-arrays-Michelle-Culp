import sumArray from "./index.js";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

describe("sumArray", () => {
  it("returns 0 for an empty array", () => {
    assert.strictEqual(sumArray([]), 0);
  });

  it("correctly sums an array of positive numbers", () => {
    assert.strictEqual(sumArray([1, 2, 3, 4]), 10);
  });

  it("correctly sums an array with negative numbers", () => {
    assert.strictEqual(sumArray([5, -2, 7]), 10);
  });

  it("correctly sums an array of all negative numbers", () => {
    assert.strictEqual(sumArray([-5, -5, -10]), -20);
  });

  it("works for a single-element array", () => {
    assert.strictEqual(sumArray([42]), 42);
  });
});
