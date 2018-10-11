const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return number for string with one number", () => {
	expect(add("5")).toBe(5);
});

it("should return sum of two numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("should summerize multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("should allow \\n as a seperator", () => {
	expect(add("1,2\n3")).toBe(6);
});