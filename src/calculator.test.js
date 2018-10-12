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

it("should throw an error if input contains negative number/s", () => {
	function negativeInput(){
		add("-2");
	}
	expect(negativeInput).toThrowError("Negatives not allowed: -2");
});

it("should throw an error if input contains negative number/s", () => {
	function negativeInput(){
		add("1,-2,5,-6");
	}
	expect(negativeInput).toThrowError("Negatives not allowed: -2,-6");
});

it("should ignore numbers bigger than 1000", () => {
	expect(add("1001")).toBe(0);
});

it("should ignore numbers bigger than 1000", () => {
	expect(add("1001,2,1002")).toBe(2);
});

it("should allow '.' as a delimiter", () => {
	expect(add("//.\n1.2")).toBe(3);
});
