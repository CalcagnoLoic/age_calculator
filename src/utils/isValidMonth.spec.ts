import { describe, it, expect } from "vitest";
import { isValidMonth } from "./isValidMonth";

describe("isValidDay Suite Unit Test", () => {
  it("should be return something", () => {
    expect(isValidMonth(2)).toBeDefined();
  });

  it("should be return a boolean", () => {
    expect(typeof isValidMonth(2)).toBe("boolean");
  });

  it("should be return true", () => {
    expect(isValidMonth(5)).toBe(true);
    expect(isValidMonth(9)).toBe(true);
    expect(isValidMonth(12)).toBe(true);
  });

  it("should be return false", () => {
    expect(isValidMonth(0)).toBe(false);
    expect(isValidMonth(186)).toBe(false);
    expect(isValidMonth(49)).toBe(false);
  });
});
