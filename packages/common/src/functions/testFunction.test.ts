import { testFunction } from "./testFunction";

test("testFunction adds numbers correctly", () => {
  expect(testFunction(1, 2)).toBe(3);
});
