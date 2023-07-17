const maxChar = require("../max-char.js");

describe("testing max-char.js", () => {
  test("maxChar function exists", () => {
    expect(typeof maxChar).toEqual("function");
  });
});

describe("testing max-char.js", () => {
  test("Finds the most frequently used char", () => {
    expect(maxChar("a")).toEqual("a");
    expect(maxChar("abcdefghijklmnaaaaa")).toEqual("a");
  });
});

describe("testing max-char.js", () => {
  test("Works with numbers in the string", () => {
    expect(maxChar("ab1c1d1e1f1g1")).toEqual("1");
  });
});
