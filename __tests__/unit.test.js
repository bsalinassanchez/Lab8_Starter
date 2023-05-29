// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

// isPhoneNumber tests

test("testing a normal phone number", () => {
	const phoneNumber = "(760) 443-1234";
	let result = functions.isPhoneNumber(phoneNumber);
	expect(result).toBe(true);
});

test("testing another normal phone number", () => {
	const phoneNumber = "760-123-3253";
	let result = functions.isPhoneNumber(phoneNumber);
	expect(result).toBe(true);
});

test("testing a bad format phone number", () => {
	const phoneNumber = "619 234 1923";
	let result = functions.isPhoneNumber(phoneNumber);
	expect(result).toBe(false);
});

test("testing a bad format phone number", () => {
	const phoneNumber = "1252231439";
	let result = functions.isPhoneNumber(phoneNumber);
	expect(result).toBe(false);
});

//testing isEmail

test("testing a good format email", () => {
	const email = "test123@gmail.com";
	let result = functions.isEmail(email);
	expect(result).toBe(true);
});
test("testing a good format email", () => {
	const email = "123test@yahoo.com";
	let result = functions.isEmail(email);
	expect(result).toBe(true);
});
test("testing a bad format email", () => {
	const email = "!%$%@email.com";
	let result = functions.isEmail(email);
	expect(result).toBe(false);
});

test("testing a bad format email", () => {
	const email = "test123@gm!ail.com";
	let result = functions.isEmail(email);
	expect(result).toBe(false);
});

//testing is password

test("testing a good format password", () => {
	const pw = "HI_123_HAHA";
	let result = functions.isStrongPassword(pw);
	expect(result).toBe(true);
});
test("testing a good format password", () => {
	const pw = "mypw1234_";
	let result = functions.isStrongPassword(pw);
	expect(result).toBe(true);
});
test("testing a good format password", () => {
	const pw = "_secret123";
	let result = functions.isStrongPassword(pw);
	expect(result).toBe(false);
});
test("testing a good format password", () => {
	const pw = "32!@#test";
	let result = functions.isStrongPassword(pw);
	expect(result).toBe(false);
});

// testing isDate

test("testing a good date format date", () => {
	const date = "12/31/2023";
	let result = functions.isDate(date);
	expect(result).toBe(true);
});

test("testing another good date format date", () => {
	const date = "1/1/2000";
	let result = functions.isDate(date);
	expect(result).toBe(true);
});

test("testing a bad date format date", () => {
	const date = "31/12/22";
	let result = functions.isDate(date);
	expect(result).toBe(false);
});

test("testing another bad date format date", () => {
	const date = "2023/12/31";
	let result = functions.isDate(date);
	expect(result).toBe(false);
});

// testing isHexColor

test("testing a good hex color format hex color", () => {
	const color = "#123abc";
	let result = functions.isHexColor(color);
	expect(result).toBe(true);
});

test("testing another good hex color format hex color", () => {
	const color = "#abc";
	let result = functions.isHexColor(color);
	expect(result).toBe(true);
});

test("testing a bad hex color format hex color", () => {
	const color = "#12345";
	let result = functions.isHexColor(color);
	expect(result).toBe(false);
});

test("testing another bad hex color format hex color", () => {
	const color = "#abcd";
	let result = functions.isHexColor(color);
	expect(result).toBe(false);
});
