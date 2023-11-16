import { isValidDay } from "./main";

describe("Age Calculator Unit Test Suite", () => {
    it("it should return the good boolean", () => {
        expect(isValidDay(5).toBe(true));
        expect(isValidDay(19).toBe(true));
        expect(isValidDay(35).toBe(false));
    });
});
