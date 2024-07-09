"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testFunction_1 = require("./testFunction");
test("testFunction adds numbers correctly", () => {
    expect((0, testFunction_1.testFunction)(1, 2)).toBe(3);
});
