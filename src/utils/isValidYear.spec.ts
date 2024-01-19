import { describe, it, expect } from "vitest";
import { isValidYear } from "./isValidYear";

describe("isValidDay Suite Unit Test", () => {
  it("should be return something", () => {
    expect(isValidYear(2)).toBeDefined();
  });

  it("should be return a boolean", () => {
    expect(typeof isValidYear(2)).toBe("boolean");
  });

  it("should be return true", () => {
    expect(isValidYear(1886)).toBe(true);
  });

  it("should be return false", () => {
    expect(isValidYear(2520)).toBe(false);
  });
});
