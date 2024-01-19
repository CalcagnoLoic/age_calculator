import { describe, it, expect } from "vitest";
import { calculationAge } from "./calculationAge";

describe("calculationAge Suite Unit Test", () => {
  it("should be return something", () => {
    const yearInput: HTMLInputElement = { value: "1953" } as HTMLInputElement;
    const monthInput: HTMLInputElement = { value: "5" } as HTMLInputElement;
    const dayInput: HTMLInputElement = { value: "1" } as HTMLInputElement;

    expect(calculationAge(yearInput, monthInput, dayInput)).toBeDefined();
  });

  it("should be return 31 years 0 month and 8 days", () => {
    const yearInput: HTMLInputElement = { value: "1993" } as HTMLInputElement;
    const monthInput: HTMLInputElement = { value: "01" } as HTMLInputElement;
    const dayInput: HTMLInputElement = { value: "11" } as HTMLInputElement;

    expect(calculationAge(yearInput, monthInput, dayInput)).toStrictEqual({
      years: 31,
      months: 0,
      days: 8,
    });
  });
});
