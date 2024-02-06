import { describe, it, expect } from "vitest";
import { isValidYear } from "./isValidYear";

describe("isValidDay Suite Unit Test", () => {
  it("should be return something", () => {
    expect(isValidYear(2)).toBeDefined();
  });

  it("should be return a boolean", () => {
    expect(typeof isValidYear(2)).toBe("boolean");
  });

  it("should be return valid year", () => {
    expect(isValidYear(1886)).toBe(false);
  });

  it("should be return invalid year", () => {
    expect(isValidYear(2520)).toBe(true);
  });
});
