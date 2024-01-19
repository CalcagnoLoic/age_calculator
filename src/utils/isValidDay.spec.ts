import { describe, it, expect } from "vitest";
import { isValidDay } from "./isValidDay";

describe("isValidDay Suite Unit Test", () => {
  it("should be return something", () => {
    expect(isValidDay(2)).toBeDefined();
  });

  it("should be return a boolean", () => {
    expect(typeof isValidDay(2)).toBe("boolean");
  });

  it("should be return true", () => {
    expect(isValidDay(5)).toBe(true);
    expect(isValidDay(9)).toBe(true);
    expect(isValidDay(12)).toBe(true);
  });

  it("should be return false", () => {
    expect(isValidDay(0)).toBe(false);
    expect(isValidDay(186)).toBe(false);
    expect(isValidDay(49)).toBe(false);
  });
});
