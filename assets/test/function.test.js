import { isValidDay, isValidMonth, isValidYear } from "./function";

describe("Age Calculator Unit Test Suite", () => {
    it("it should return the good boolean for valid day", () => {
        expect(isValidDay(5)).toBe(true)
        expect(isValidDay(86)).toBe(false)
    });

    it("it should return the good boolean for valid month", () => {
        expect(isValidMonth(5)).toBe(true)
        expect(isValidMonth(86)).toBe(false)
    });

    it("it should return the good boolean for valid year", () => {
        expect(isValidYear(2196)).toBe(false)
        expect(isValidYear(2015)).toBe(true)
        expect(isValidYear(1993)).toBe(true)
    });
});
