const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return number for string with one number", () => {
	expect(add("5")).toBe(5);
});