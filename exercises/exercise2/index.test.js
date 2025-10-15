import filterOutNegatives from "./index.js";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

describe("filterOutNegatives", () => {
  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(filterOutNegatives([]), []);
  });

  it("removes negative numbers and keeps non-negative numbers", () => {
    assert.deepEqual(filterOutNegatives([-1, 5, -3, 2, 0]), [5, 2, 0]);
  });

  it("returns an identical array if no negative numbers are present", () => {
    assert.deepEqual(filterOutNegatives([1, 2, 3]), [1, 2, 3]);
  });

  it("returns an empty array if all numbers are negative", () => {
    assert.deepEqual(filterOutNegatives([-5, -10]), []);
  });

  it("handles 0 as a non-negative number", () => {
    assert.deepEqual(filterOutNegatives([-1, 0, 1]), [0, 1]);
  });

  it("handles a single positive number", () => {
    assert.deepEqual(filterOutNegatives([7]), [7]);
  });
});
