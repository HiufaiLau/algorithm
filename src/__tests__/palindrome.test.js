const palindrome = require("../palindrome.js");

describe("testing palidrome.js", () => {
  test("palindrome function is defined", () => {
    expect(typeof palindrome).toEqual("function");
  });
});

describe("testing palidrome.js", () => {
  test('"aba" is a palindrome', () => {
    expect(palindrome("aba")).toBeTruthy();
  });
});

describe("testing palidrome.js", () => {
  test('" aba" is not a palindrome', () => {
    expect(palindrome(" aba")).toBeFalsy();
  });
});

describe("testing palidrome.js", () => {
  test('"aba " is not a palindrome', () => {
    expect(palindrome("aba ")).toBeFalsy();
  });
});

describe("testing palidrome.js", () => {
  test('"greetings" is not a palindrome', () => {
    expect(palindrome("greetings")).toBeFalsy();
  });
});

describe("testing palidrome.js", () => {
  test('"1000000001" a palindrome', () => {
    expect(palindrome("1000000001")).toBeTruthy();
  });
});

describe("testing palidrome.js", () => {
  test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome("Fish hsif")).toBeFalsy();
  });
});

describe("testing palidrome.js", () => {
  test('"pennep" a palindrome', () => {
    expect(palindrome("pennep")).toBeTruthy();
  });
});
