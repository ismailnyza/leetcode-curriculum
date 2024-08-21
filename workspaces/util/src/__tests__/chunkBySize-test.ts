import { describe, expect, it } from "@jest/globals";
import { chunkBySize } from "../chunkBySize";

describe("chunkBySize", () => {
  it("splits an input array into smaller arrays", () => {
    const result = chunkBySize([1, 2, 3, 4], 2);
    expect([...result]).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("handles an array not perfectly divisible by chunk size", () => {
    const result = chunkBySize([1, 2, 3], 2);
    expect([...result]).toStrictEqual([[1, 2], [3]]);
  });

  it("handles a chunk size greater than array length", () => {
    const result = chunkBySize([1, 2], 3);
    expect([...result]).toStrictEqual([[1, 2]]);
  });

  it("handles a chunk size of 1", () => {
    const result = chunkBySize([1, 2, 3], 1);
    expect([...result]).toStrictEqual([[1], [2], [3]]);
  });

  it("handles an empty array", () => {
    const result = chunkBySize([], 2);
    expect([...result]).toStrictEqual([]);
  });

  it("handles non-numeric elements", () => {
    const result = chunkBySize(["a", "b", "c"], 2);
    expect([...result]).toStrictEqual([["a", "b"], ["c"]]);
  });

  it("throws an error for a chunk size less than 1", () => {
    expect(() => chunkBySize([1, 2, 3], 0)).toThrow(
      "Chunk size must be a positive integer!",
    );
    expect(() => chunkBySize([1, 2, 3], -1)).toThrow(
      "Chunk size must be a positive integer!",
    );
  });

  it("throws an error for a non-integer chunk size", () => {
    expect(() => chunkBySize([1, 2, 3], 1.5)).toThrow(
      "Chunk size must be a positive integer!",
    );
  });
});
